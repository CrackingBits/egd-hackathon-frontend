/* tslint:disable */
/* eslint-disable */
import { EnergyCommunityDto } from './energy-community-dto';
import { EnergyConsumptionInfo } from './energy-consumption-info';
export interface ManagerEnergyFinancialOverview {
  energyCommunity?: EnergyCommunityDto;
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
