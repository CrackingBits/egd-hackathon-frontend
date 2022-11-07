import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EconomicModelCalculationDto } from '../api-swagger/models/economic-model-calculation-dto';
import { PvCalcResponse } from '../shared/models/pv-calc-response';
import { AlertService } from '../shared/services/alert.service';
import { PvGisService } from '../shared/services/pvgis.service';
import { TitleService } from '../shared/services/title.service';
import { CalculationService } from './calculation.service';

@Component({
  selector: 'app-calculation-detail',
  templateUrl: './calculation-detail.component.html',
  styleUrls: ['./calculation-detail.component.scss'],
})
export class CalculationDetailComponent implements OnInit, OnDestroy {
  @ViewChild('calculationDetailForm', { static: false }) form:
    | NgForm
    | undefined;

  readonly title = 'Komunitní solární kalkulačka';

  pvGisInfo: PvCalcResponse | undefined;

  routeSub: any;
  calculationSub: any;

  uiLoading = false;

  calculationId = 0;
  calculationObj: EconomicModelCalculationDto = {};

  apiKeyObj = { google: environment.googleMapApiKey }; // TODO - different api key in future
  mapMarkers: any[] = [];
  centerCoordinates: any;

  isAccordionOpen = false;

  constructor(
    private calculationsService: CalculationService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: TitleService,
    private alertService: AlertService,
    private pvGisService: PvGisService
  ) {
    this.clickMap = this.clickMap.bind(this);
    this.markFormAsDirty = this.markFormAsDirty.bind(this);
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      const idFromUrl = +params['id'];

      if (idFromUrl > 0) {
        this.calculationId = idFromUrl;
        this.titleService.setSubTitle(`${this.title} #${this.calculationId}`);
      } else {
        this.titleService.setSubTitle(this.title);
        this.setToNewObject();
      }

      this.setupUi();
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  setupUi() {
    this.uiLoading = false;

    console.debug(`setupUi calculation #${this.calculationId}`);
    if (this.calculationId > 0) {
      this.uiLoading = true;
      this.isAccordionOpen = true;

      this.calculationsService.getCalculation(this.calculationId).subscribe(
        (calculation: any) => {
          this.calculationObj = calculation;
          this.centerCoordinates = this.calculationObj.locationGps;
          this.mapMarkers = [{ location: this.centerCoordinates }];

          this.uiLoading = false;
        },
        (error) => {
          this.uiLoading = false;
          this.alertService.error('Chyba načtení kalkulace!', error);
          this.router.navigate(['/calculation']);
        }
      );
    } else {
      this.isAccordionOpen = false;
      this.uiLoading = false;
    }
  }

  private setToNewObject() {
    const newObj: EconomicModelCalculationDto = { id: 0 };

    this.calculationId = 0;
    this.calculationObj = newObj;

    this.calculationObj.collectionPoints = [];
  }

  clickSave() {
    if (confirm('Opravdu chcete uložit změny v kalkulaci?')) {
      this.uiLoading = true;

      this.calculationsService
        .updateOrCreateCalculation(this.calculationId, this.calculationObj)
        .subscribe(
          (response: any) => {
            this.alertService.success(`Kalkulace #${response.id} uložena`);

            if (this.calculationId === 0) {
              this.router.navigate(['/calculation/detail', response.id]);
            } else {
              this.setupUi();
            }
          },
          (error: any) => {
            this.uiLoading = false;
            this.alertService.fatal('Chyba ukládání kalkulace!', error);
          }
        );
    }
  }

  clickCreate() {
    this.router.navigate(['/calculation/detail', 0]);
  }

  clickUnlock() {}

  clickReset() {
    console.log('clickReset');
    if (this.calculationId === 0) {
      this.setToNewObject();
    }
    this.setupUi();
  }

  clickDelete() {
    if (
      confirm(`Opravdu je potřeba smazat kalkulaci #${this.calculationId}?`)
    ) {
      this.uiLoading = true;
      this.calculationsService.deleteCalculation(this.calculationId).subscribe(
        (response: any) => {
          this.alertService.success('Kalkulace vymazána');
          this.router.navigate(['/calculation']);
        },
        (error: any) => {
          this.uiLoading = false;
          this.alertService.error('Kalkulaci se nepodařilo smazat!', error);
        }
      );
    }
  }

  clickCustom(event: any) {
    if (event === 'calculate') {
      if (confirm('Opravdu chcete uložit změny a přepočítat kalkulaci?')) {
        this.calculateEconomic();
      }
    }
  }

  clickMap(e: any) {
    const newLocation = `${e.location.lat}, ${e.location.lng}`;
    this.calculationObj.locationGps = newLocation;

    this.mapMarkers = [{ location: newLocation }];

    this.markFormAsDirty();
  }

  markFormAsDirty() {
    this.form?.control.markAsDirty();
  }

  onToolbarPreparing(e: any) {
    e.toolbarOptions.hideRefreshInItems = true;
  }

  pad(num: number, size: number) {
    let s = '000000000' + num;
    return s.substr(s.length - size);
  }

  calculateEconomic(): any {
    this.uiLoading = true;
    this.pvGisInfo = this.pvGisService.pvGisInfo(this.calculationObj).subscribe(
      (resp: PvCalcResponse) => {
        if (resp?.outputs?.totals?.fixed != null) {
          this.calculationObj.yearlyPvEnergyProduction =
            resp.outputs.totals.fixed.E_y / 1000;
          this.calculationObj.yearToYearVariability =
            resp.outputs.totals.fixed.SD_y / 1000;

          this.calculationsService.calculateCalculation(0, this.calculationObj);

          this.isAccordionOpen = true;
          this.uiLoading = false;
        } else {
          this.uiLoading = false;
          this.alertService.error('Kalkulaci se nepodařilo vypočítat!');
        }
      },
      (error: any) => {
        this.uiLoading = false;
        this.alertService.error('Kalkulaci se nepodařilo vypočítat!', error);
      }
    );
  }
}
