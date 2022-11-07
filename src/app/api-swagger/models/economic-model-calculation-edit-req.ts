/* tslint:disable */
/* eslint-disable */
import { CollectionPointDto } from './collection-point-dto';
import { PvType } from './pv-type';
export interface EconomicModelCalculationEditReq {
  azimut?: null | number;
  collectionPoints?: null | Array<CollectionPointDto>;
  communityName?: null | string;
  grant?: null | number;
  lifetime?: null | number;
  locationGps?: null | string;
  pvPeakPower?: null | number;
  pvSystemCost?: null | number;
  pvType?: PvType;
  slope?: null | number;
  userId?: null | number;
}
