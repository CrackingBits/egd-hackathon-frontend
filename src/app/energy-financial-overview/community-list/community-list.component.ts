import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { TitleService } from 'src/app/shared/services/title.service';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss'],
})
export class CommunityListComponent implements OnInit {
  readonly title = 'Editace komunit';
  communityStore: CustomStore;
  communityCollectionStore: CustomStore;

  constructor(
    communityService: CommunityService,
    private titleService: TitleService
  ) {
    this.communityStore = communityService.cummunityStore;
    this.communityCollectionStore =
      communityService.communityCollectionPointStore;
  }

  ngOnInit() {
    this.titleService.setSubTitle(this.title);
  }

  onToolbarPreparing(e: any) {
    e.toolbarOptions.hideRefreshInItems = true;
  }

  onInitNewRow(e: any, energyCommunityId: any) {
    e.data.energyCommunityId = energyCommunityId;
  }
}
