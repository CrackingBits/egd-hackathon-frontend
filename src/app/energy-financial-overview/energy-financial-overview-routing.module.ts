import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityListComponent } from './community-list/community-list.component';
import { CommunityManagerOverviewComponent } from './community-manager-overview/community-manager-overview.component';
import { CommunityUserOverviewComponent } from './community-user-overview/community-user-overview.component';
import { OverviewDashboardComponent } from './overview-dashboard.component';

const routes: Routes = [
  { path: '', component: OverviewDashboardComponent },
  { path: 'for-user/:id', component: CommunityUserOverviewComponent },
  { path: 'for-manager/:id', component: CommunityManagerOverviewComponent },
  { path: 'community/list', component: CommunityListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergyFinancialOverviewRoutingModule {}
