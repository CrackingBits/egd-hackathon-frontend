import { Injectable } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import CustomStore from 'devextreme/data/custom_store';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';
import { EnergyCommunitiesServiceMock } from '../shared/services/mocks/energy-communities-mock.service';
import { EnergyFinancialOverviewServiceMock } from '../shared/services/mocks/energy-financial-overview-mock.service';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  constructor(
    private authService: AuthService,
    private energyCommunitiesService: EnergyCommunitiesServiceMock,
    private energyFinancialOverviewService: EnergyFinancialOverviewServiceMock
  ) {}

  get cummunityStore(): CustomStore {
    const url = `${environment.api}/community-mock.json`;

    return createStore({
      key: 'id',
      loadUrl: url,
      insertUrl: url,
      updateUrl: url,
      deleteUrl: url,
      onBeforeSend: this.authService.createStoreOnBeforeSend,
      errorHandler: this.authService.createStoreErrorHandler,
    });
  }

  get communityCollectionPointStore(): CustomStore {
    const url = `${environment.api}/community-collection-points.json`;

    return createStore({
      key: 'id',
      loadUrl: url,
      insertUrl: url,
      updateUrl: url,
      deleteUrl: url,
      onBeforeSend: this.authService.createStoreOnBeforeSend,
      errorHandler: this.authService.createStoreErrorHandler,
    });
  }

  communityOverviewList(): any {
    return this.energyCommunitiesService.apiV1EnergyFinancialOverviewCommunityGridGet(
      {
        loadOptions: {},
      }
    );
  }

  financialOverviewForUser(id: number): any {
    return this.energyFinancialOverviewService.apiV1EnergyFinancialOverviewForUserIdGet(
      { id }
    );
  }

  financialOverviewForManager(id: number): any {
    return this.energyFinancialOverviewService.apiV1EnergyFinancialOverviewForManagerIdGet(
      { id }
    );
  }
}
