import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityManagerOverviewComponent } from './community-manager-overview.component';

describe('CommunityManagerOverviewComponent', () => {
  let component: CommunityManagerOverviewComponent;
  let fixture: ComponentFixture<CommunityManagerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityManagerOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityManagerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
