import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '../shared/services/alert.service';
import { TitleService } from '../shared/services/title.service';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-overview-dashboard',
  templateUrl: './overview-dashboard.component.html',
  styleUrls: ['./overview-dashboard.component.scss'],
})
export class OverviewDashboardComponent implements OnInit, OnDestroy {
  readonly title = 'Přehled komunit a odběrných míst';
  communityOverviewList: any;
  communitySub: any;
  uiLoading = false;

  constructor(
    private communityService: CommunityService,
    private alertService: AlertService,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setSubTitle(this.title);

    this.uiLoading = true;
    this.communitySub = this.communityService.communityOverviewList().subscribe(
      (resp: any) => {
        this.communityOverviewList = resp?.data;
        this.uiLoading = false;
      },
      (error: any) => {
        this.uiLoading = false;
        this.alertService.fatal('Nepodařilo se načíst komunity!', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.communitySub) {
      this.communitySub.unsubscribe();
    }
  }
}
