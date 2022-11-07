/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../../../api-swagger/base-service';
import { ApiConfiguration } from '../../../api-swagger/api-configuration';
import { StrictHttpResponse } from '../../../api-swagger/strict-http-response';
import { RequestBuilder } from '../../../api-swagger/request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ManagerEnergyFinancialOverview } from '../../../api-swagger/models/manager-energy-financial-overview';
import { UserEnergyFinancialOverview } from '../../../api-swagger/models/user-energy-financial-overview';

@Injectable({
  providedIn: 'root',
})
export class EnergyFinancialOverviewServiceMock extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  static readonly ApiV1EnergyFinancialOverviewForUserIdGetPath =
    '/energy-financial-overview-for-user-1.json';

  apiV1EnergyFinancialOverviewForUserIdGet$Response(params: {
    id: number;
    date?: string;
    context?: HttpContext;
  }): Observable<StrictHttpResponse<UserEnergyFinancialOverview>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      EnergyFinancialOverviewServiceMock.ApiV1EnergyFinancialOverviewForUserIdGetPath,
      'get'
    );
    if (params) {
      rb.path('id', params.id, {});
      rb.query('date', params.date, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: params?.context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<UserEnergyFinancialOverview>;
        })
      );
  }

  apiV1EnergyFinancialOverviewForUserIdGet(params: {
    id: number;
    date?: string;
    context?: HttpContext;
  }): Observable<UserEnergyFinancialOverview> {
    return this.apiV1EnergyFinancialOverviewForUserIdGet$Response(params).pipe(
      map(
        (r: StrictHttpResponse<UserEnergyFinancialOverview>) =>
          r.body as UserEnergyFinancialOverview
      )
    );
  }

  static readonly ApiV1EnergyFinancialOverviewForManagerIdGetPath =
    '/energy-financial-overview-for-manager-1.json';

  apiV1EnergyFinancialOverviewForManagerIdGet$Response(params: {
    id: number;
    date?: string;
    context?: HttpContext;
  }): Observable<StrictHttpResponse<ManagerEnergyFinancialOverview>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      EnergyFinancialOverviewServiceMock.ApiV1EnergyFinancialOverviewForManagerIdGetPath,
      'get'
    );
    if (params) {
      rb.path('id', params.id, {});
      rb.query('date', params.date, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: params?.context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<ManagerEnergyFinancialOverview>;
        })
      );
  }

  apiV1EnergyFinancialOverviewForManagerIdGet(params: {
    id: number;
    date?: string;
    context?: HttpContext;
  }): Observable<ManagerEnergyFinancialOverview> {
    return this.apiV1EnergyFinancialOverviewForManagerIdGet$Response(
      params
    ).pipe(
      map(
        (r: StrictHttpResponse<ManagerEnergyFinancialOverview>) =>
          r.body as ManagerEnergyFinancialOverview
      )
    );
  }
}
