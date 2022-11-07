/* tslint:disable */
/* eslint-disable */
import { GroupingInfo } from './grouping-info';
import { SortingInfo } from './sorting-info';
import { SummaryInfo } from './summary-info';
export interface DataSourceLoadOptions {
  allowAsyncOverSync?: boolean;
  defaultSort?: null | string;
  expandLinqSumType?: null | boolean;
  filter?: null | Array<any>;
  group?: null | Array<GroupingInfo>;
  groupSummary?: null | Array<SummaryInfo>;
  isCountQuery?: boolean;
  isSummaryQuery?: boolean;
  paginateViaPrimaryKey?: null | boolean;
  preSelect?: null | Array<string>;
  primaryKey?: null | Array<string>;
  remoteGrouping?: null | boolean;
  remoteSelect?: null | boolean;
  requireGroupCount?: boolean;
  requireTotalCount?: boolean;
  select?: null | Array<string>;
  skip?: number;
  sort?: null | Array<SortingInfo>;
  sortByPrimaryKey?: null | boolean;
  stringToLower?: null | boolean;
  take?: number;
  totalSummary?: null | Array<SummaryInfo>;
}
