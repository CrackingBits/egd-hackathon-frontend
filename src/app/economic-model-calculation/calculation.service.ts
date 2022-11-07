import { Injectable } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import CustomStore from 'devextreme/data/custom_store';
import { of } from 'rxjs';
import { CollectionPointDto } from 'src/app/api-swagger/models/collection-point-dto';
import { EconomicModelCalculationDto } from 'src/app/api-swagger/models/economic-model-calculation-dto';
import { environment } from 'src/environments/environment';
import { EconomicModelCalculationCreateReq } from '../api-swagger/models/economic-model-calculation-create-req';
import { AuthService } from '../shared/services/auth.service';
import { EconomicModelCalculationServiceMock } from '../shared/services/mocks/economic-model-calculation-mock.service';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  readonly FIX_PRISE: number = 1400;

  constructor(
    private authService: AuthService,
    private economicModelCalculationService: EconomicModelCalculationServiceMock
  ) {}

  get calculationsStore(): CustomStore {
    const url = `${environment.api}/economic-model-calculations-mock.json`;
    return createStore({
      key: 'id',
      loadUrl: url,
      insertUrl: url,
      updateUrl: url,
      deleteUrl: url,
      onBeforeSend: this.authService.createStoreOnBeforeSend,
      errorHandler: this.authService.createStoreErrorHandler,
    });
  }

  getCalculation(id: number) {
    return this.economicModelCalculationService.apiV1EconomicModelCalculationIdGet(
      { id }
    );
  }

  updateOrCreateCalculation(id: number, calculationObj: any): any {
    const updateReq: EconomicModelCalculationCreateReq =
      {} as EconomicModelCalculationCreateReq;

    updateReq.azimut = calculationObj.azimut;
    updateReq.collectionPoints = calculationObj.collectionPoints;
    updateReq.communityName = calculationObj.communityName;
    updateReq.grant = calculationObj.grant;
    updateReq.lifetime = calculationObj.lifetime;
    updateReq.locationGps = calculationObj.locationGps;
    updateReq.pvPeakPower = calculationObj.pvPeakPower;
    updateReq.pvSystemCost = calculationObj.pvSystemCost;
    updateReq.pvType = calculationObj.pvType;
    updateReq.slope = calculationObj.slope;
    updateReq.userId = calculationObj.userId;

    return of(calculationObj);
  }

  deleteCalculation(id: number) {
    return of({});
  }

  calculateCalculation(
    id: number,
    calculationObj: EconomicModelCalculationDto
  ): any {
    var calculation = this.processCalculation(calculationObj);
    if (calculation.id == null || calculation.id == 0) {
      calculation.id = 1;
    }
    return calculation;
  }

  processCalculation(
    economicModelCalculation: EconomicModelCalculationDto
  ): EconomicModelCalculationDto {
    this.resetCalculation(economicModelCalculation);

    if (
      economicModelCalculation.collectionPoints != null &&
      economicModelCalculation.collectionPoints.length > 0
    ) {
      var mainCollectionPoint = economicModelCalculation.collectionPoints[0];
      var restCollectionPoint =
        economicModelCalculation.collectionPoints.slice(1);

      this.calculateConstNoPV(economicModelCalculation);
      this.normalizeFactor(restCollectionPoint);
      this.calculateConstSave(
        economicModelCalculation,
        mainCollectionPoint,
        restCollectionPoint
      );
      this.calculatePayBack(economicModelCalculation);
    }

    return economicModelCalculation;
  }

  resetCalculation(economicModelCalculation: EconomicModelCalculationDto) {
    economicModelCalculation.yearlyPvEnergyProductionExport = null;
    economicModelCalculation.yearlyPvEnergyProductionExportPrise = null;
    economicModelCalculation.pvSystemPaybackYears = null;
    economicModelCalculation.yearlySaving = null;

    economicModelCalculation.collectionPoints?.forEach((point) => {
      point.costBefor = null;
      point.costAfter = null;
      point.saving = null;
    });
  }

  calculateConstNoPV(economicModelCalculation: EconomicModelCalculationDto) {
    economicModelCalculation.collectionPoints?.forEach((point) => {
      var fixedPart = 12 * (point.fixedMonthlyPayment ?? 0);
      var lowTariffConst =
        (point.costLowTarif ?? 0) * (point.consumptionLowTarif ?? 0) * 1000;
      var highTariffConst =
        (point.costHighTarif ?? 0) * (point.consumptionHighTarif ?? 0) * 1000;

      point.costBefor = fixedPart + lowTariffConst + highTariffConst;
    });
  }

  calculateConstSave(
    economicModelCalculation: EconomicModelCalculationDto,
    mainCollectionPoint: CollectionPointDto,
    restCollectionPoint: Array<CollectionPointDto>
  ) {
    economicModelCalculation.yearlyPvEnergyProductionExport = 0;
    var yearlyPvEnergyProduction =
      economicModelCalculation.yearlyPvEnergyProduction ?? 0;

    var mainCollectionPointConsumption =
      (mainCollectionPoint.consumptionLowTarif ?? 0) +
      (mainCollectionPoint.consumptionHighTarif ?? 0);
    if (yearlyPvEnergyProduction > mainCollectionPointConsumption) {
      yearlyPvEnergyProduction -= mainCollectionPointConsumption;
      mainCollectionPoint.costAfter =
        12 * (mainCollectionPoint.fixedMonthlyPayment ?? 0);

      if (mainCollectionPoint.costBefor != null) {
        mainCollectionPoint.saving =
          mainCollectionPoint.costBefor - mainCollectionPoint.costAfter;
      }

      economicModelCalculation.yearlyPvEnergyProductionExport =
        this.calculateConstSaveRest(
          yearlyPvEnergyProduction,
          restCollectionPoint
        );
    } else {
      var fixedPart = 12 * (mainCollectionPoint.fixedMonthlyPayment ?? 0);

      var consumptionHighTarif = mainCollectionPoint.consumptionHighTarif ?? 0;
      if (yearlyPvEnergyProduction > consumptionHighTarif) {
        yearlyPvEnergyProduction -= consumptionHighTarif;
        consumptionHighTarif = 0;
      } else {
        consumptionHighTarif = consumptionHighTarif - yearlyPvEnergyProduction;
        yearlyPvEnergyProduction = 0;
      }

      var consumptionLowTarif = mainCollectionPoint.consumptionLowTarif ?? 0;
      if (yearlyPvEnergyProduction > consumptionLowTarif) {
        yearlyPvEnergyProduction -= consumptionLowTarif;
        consumptionLowTarif = 0;
      } else {
        consumptionLowTarif = consumptionLowTarif - yearlyPvEnergyProduction;
        yearlyPvEnergyProduction = 0;
      }

      var highTarifConst =
        (mainCollectionPoint.costHighTarif ?? 0) * consumptionHighTarif * 1000;
      var lowTarifConst =
        (mainCollectionPoint.costLowTarif ?? 0) * consumptionLowTarif * 1000;

      mainCollectionPoint.costAfter =
        fixedPart + highTarifConst + lowTarifConst;
      if (mainCollectionPoint.costBefor != null) {
        mainCollectionPoint.saving =
          mainCollectionPoint.costBefor - mainCollectionPoint.costAfter;
      }

      restCollectionPoint.forEach((point) => {
        point.costAfter = point.costBefor;
        point.saving = 0;
      });
    }

    if (economicModelCalculation.yearlyPvEnergyProductionExport > 0) {
      economicModelCalculation.yearlyPvEnergyProductionExportPrise =
        economicModelCalculation.yearlyPvEnergyProductionExport *
        this.FIX_PRISE;
    } else {
      economicModelCalculation.yearlyPvEnergyProductionExportPrise = 0;
    }
  }

  calculatePayBack(economicModelCalculation: EconomicModelCalculationDto) {
    if (economicModelCalculation == null) {
      return;
    }

    var savings: number = 0;
    if (economicModelCalculation.collectionPoints != null) {
      economicModelCalculation.collectionPoints.forEach((it) => {
        if (it.saving != null) {
          savings += it.saving;
        }
      });
    }

    economicModelCalculation.yearlySaving = savings;

    if (savings > 0) {
      economicModelCalculation.pvSystemPaybackYears = Math.ceil(
        Math.max(
          0,
          (economicModelCalculation.pvSystemCost ?? 0) -
            (economicModelCalculation.grant ?? 0)
        ) / savings
      );
    }
  }

  normalizeFactor(collectionPoint: Array<CollectionPointDto>) {
    if (collectionPoint == null || collectionPoint.length === 0) {
      return;
    }

    var collectionPointWithDistributionFactor = collectionPoint.filter(
      (it) => it.distributionFactor != null && it.distributionFactor > 0
    );
    if (collectionPointWithDistributionFactor.length > 0) {
      var sum: number = 0;
      collectionPointWithDistributionFactor.forEach((it) => {
        if (it.distributionFactor != null) {
          sum += it.distributionFactor;
        }
      });
      var count = collectionPointWithDistributionFactor.length;
      var dif = (100 - sum) / count;

      collectionPointWithDistributionFactor.forEach((point) => {
        if (point.distributionFactor != null && point.distributionFactor > 0) {
          point.distributionFactor += dif;
        }
      });
    } else {
      var factor = 100 / collectionPoint.length;
      collectionPoint.forEach((point) => {
        point.distributionFactor = factor;
      });
    }
  }

  calculateConstSaveRest(
    yearlyPvEnergyProduction: number,
    restCollectionPoint: Array<CollectionPointDto>
  ): number {
    var toSell: number = 0;

    restCollectionPoint.forEach((collectionPoint) => {
      var costHighTarif = collectionPoint.costHighTarif ?? 0;
      var costLowTarif = collectionPoint.costLowTarif ?? 0;
      var consumptionLowTarif = collectionPoint.consumptionLowTarif ?? 0;
      var consumptionHighTarif = collectionPoint.consumptionHighTarif ?? 0;

      var sell: number = 0;

      var part =
        (yearlyPvEnergyProduction * (collectionPoint.distributionFactor ?? 0)) /
        100;
      if (part > consumptionLowTarif + consumptionHighTarif) {
        sell = part - (consumptionLowTarif + consumptionHighTarif);
        toSell += sell;
        part = consumptionLowTarif + consumptionHighTarif;
      }

      if (costHighTarif != 0 || costLowTarif != 0) {
        var vtSaving =
          (consumptionHighTarif /
            (consumptionHighTarif + consumptionLowTarif)) *
          part *
          (costHighTarif * 1000);
        var ntSaving =
          (consumptionLowTarif / (consumptionHighTarif + consumptionLowTarif)) *
          part *
          (costLowTarif * 1000);
        collectionPoint.saving = vtSaving + ntSaving;
        if (collectionPoint.costBefor != null) {
          collectionPoint.costAfter =
            collectionPoint.costBefor - collectionPoint.saving;
        }
      }
    });

    return toSell;
  }
}
