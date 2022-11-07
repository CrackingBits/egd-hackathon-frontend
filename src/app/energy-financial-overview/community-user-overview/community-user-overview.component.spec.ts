import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityUserOverviewComponent } from './community-user-overview.component';

describe('CommunityUserOverviewComponent', () => {
  let component: CommunityUserOverviewComponent;
  let fixture: ComponentFixture<CommunityUserOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityUserOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityUserOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
