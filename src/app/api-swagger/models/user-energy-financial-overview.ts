/* tslint:disable */
/* eslint-disable */
import { EnergyCommunityCollectionPointDto } from './energy-community-collection-point-dto';
import { EnergyConsumptionInfo } from './energy-consumption-info';
export interface UserEnergyFinancialOverview {
  collectionPoint?: EnergyCommunityCollectionPointDto;
  energyConsumption?: null | Array<EnergyConsumptionInfo>;
  energyHealth?: number;
  energyHealthLast3Months?: number;
  historyConsumptionSum?: number;
  historyNetPartSum?: number;
  historyPvPartSum?: number;
  historyPvUnusedPartSum?: number;
  historyPvUsedPartSum?: number;
  predictionPvProductionSum?: null | number;
}
