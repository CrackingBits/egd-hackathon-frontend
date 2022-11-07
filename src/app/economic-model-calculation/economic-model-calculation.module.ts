import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DxDataGridModule, DxMapModule } from 'devextreme-angular';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ToolbarModule } from '../shared/modules/toolbar/toolbar.module';
import { CalculationDashboardComponent } from './calculation-dashboard.component';
import { CalculationDetailComponent } from './calculation-detail.component';
import { EconomicModelCalculationRoutingModule } from './economic-model-calculation-routing.module';

@NgModule({
  declarations: [CalculationDashboardComponent, CalculationDetailComponent],
  imports: [
    CommonModule,
    EconomicModelCalculationRoutingModule,
    FormsModule,
    DxDataGridModule,
    DxMapModule,
    NgbModule,
    LoadingModule,
  ],
})
export class EconomicModelCalculationModule {}
