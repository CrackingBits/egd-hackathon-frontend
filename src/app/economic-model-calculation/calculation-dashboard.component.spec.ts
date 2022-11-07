import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationDashboardComponent } from './calculation-dashboard.component';

describe('CalculationDashboardComponent', () => {
  let component: CalculationDashboardComponent;
  let fixture: ComponentFixture<CalculationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
