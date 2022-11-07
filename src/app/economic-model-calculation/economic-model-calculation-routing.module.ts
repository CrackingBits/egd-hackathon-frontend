import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationDashboardComponent } from './calculation-dashboard.component';
import { CalculationDetailComponent } from './calculation-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CalculationDashboardComponent,
  },
  { path: 'detail/:id', component: CalculationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EconomicModelCalculationRoutingModule {}
