import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CustomStore from 'devextreme/data/custom_store';
import { TitleService } from '../shared/services/title.service';
import { CalculationService } from './calculation.service';

@Component({
  selector: 'app-calculation-dashboard',
  templateUrl: './calculation-dashboard.component.html',
  styleUrls: ['./calculation-dashboard.component.scss'],
})
export class CalculationDashboardComponent implements OnInit {
  title = 'Ekonomické kalkulace';
  calculationsDataSource: CustomStore;

  constructor(
    private calculationsService: CalculationService,
    private titleService: TitleService,
    private router: Router
  ) {
    this.editCalculation = this.editCalculation.bind(this);

    this.calculationsDataSource = calculationsService.calculationsStore;
  }

  ngOnInit(): void {
    this.titleService.setSubTitle(this.title);
  }

  addCalculation() {
    this.router.navigate(['/calculation/detail', 0]);
  }

  editCalculation(event: any) {
    this.router.navigate(['/calculation/detail', event.row.data.id]);
  }
}
