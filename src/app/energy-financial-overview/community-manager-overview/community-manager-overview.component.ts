import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TitleService } from 'src/app/shared/services/title.service';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-community-manager-overview',
  templateUrl: './community-manager-overview.component.html',
  styleUrls: ['./community-manager-overview.component.scss'],
})
export class CommunityManagerOverviewComponent implements OnInit {
  readonly title = 'Vizualizace komunity pro správce';

  areas: any;

  consumptionUserData: any;
  consumptionUserDataSub: any;
  uiLoading = false;

  constructor(
    private titleService: TitleService,
    private communityService: CommunityService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.titleService.setSubTitle(this.title);

    this.uiLoading = true;
    this.consumptionUserDataSub = this.communityService
      .financialOverviewForManager(1)
      .subscribe(
        (resp: any) => {
          this.consumptionUserData = resp;
          this.uiLoading = false;

          this.areas = [];
          this.areas.push({
            name: 'Spotřebováno ze sítě',
            value: resp.historyNetPartSum,
          });
          this.areas.push({
            name: 'Spotřebováno z FVE',
            value: resp.historyPvUsedPartSum,
          });
        },
        (error: any) => {
          this.uiLoading = false;
          this.alertService.fatal('Nepodařilo se načíst komunity!', error);
        }
      );
  }

  onToolbarPreparing(e: any) {
    e.toolbarOptions.hideRefreshInItems = true;
  }

  customizeLabel(arg: any) {
    const val = Math.round(arg.valueText * 100) / 100;
    return `${val} (${arg.percentText})`;
  }
}
