/* tslint:disable */
/* eslint-disable */
import { CollectionPointDto } from './collection-point-dto';
import { PvType } from './pv-type';
export interface EconomicModelCalculationDto {
  azimut?: null | number;
  collectionPoints?: null | Array<CollectionPointDto>;
  communityName?: null | string;
  createDate?: string;
  grant?: null | number;
  id?: number;
  lifetime?: null | number;
  locationGps?: null | string;
  pvPeakPower?: null | number;
  pvSystemCost?: null | number;
  pvSystemPaybackYears?: null | number;
  pvType?: PvType;
  revisionDate?: string;
  slope?: null | number;
  userId?: null | number;
  yearToYearVariability?: null | number;
  yearlyPvEnergyProduction?: null | number;
  yearlyPvEnergyProductionExport?: null | number;
  yearlyPvEnergyProductionExportPrise?: null | number;
  yearlySaving?: null | number;
}
