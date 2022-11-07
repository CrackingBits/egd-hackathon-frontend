import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  DxChartModule,
  DxDataGridModule,
  DxPieChartModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { CommunityListComponent } from './community-list/community-list.component';
import { CommunityManagerOverviewComponent } from './community-manager-overview/community-manager-overview.component';
import { CommunityUserOverviewComponent } from './community-user-overview/community-user-overview.component';
import { EnergyFinancialOverviewRoutingModule } from './energy-financial-overview-routing.module';
import { OverviewDashboardComponent } from './overview-dashboard.component';

@NgModule({
  declarations: [
    OverviewDashboardComponent,
    CommunityListComponent,
    CommunityUserOverviewComponent,
    CommunityManagerOverviewComponent,
  ],
  imports: [
    CommonModule,
    EnergyFinancialOverviewRoutingModule,
    DxDataGridModule,
    DxTemplateModule,
    LoadingModule,
    DxChartModule,
    DxPieChartModule,
  ],
})
export class EnergyFinancialOverviewModule {}
