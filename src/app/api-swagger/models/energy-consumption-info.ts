/* tslint:disable */
/* eslint-disable */
export interface EnergyConsumptionInfo {

  /**
   * Celkova spotreba
   */
  consumption?: number;
  date?: string;

  /**
   * Energie spotrebovana za site
   */
  netPart?: number;

  /**
   * Celkova energie pridelena FV
   */
  pvPart?: number;
  pvPrediction?: null | number;

  /**
   * Nevyuzita cast pridelene FV
   */
  pvUnusedPart?: number;

  /**
   * Vyuzita cast pridelene FV
   */
  pvUsedPart?: number;
}
