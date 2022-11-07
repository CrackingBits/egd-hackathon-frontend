/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ManagerEnergyFinancialOverview } from '../models/manager-energy-financial-overview';
import { UserEnergyFinancialOverview } from '../models/user-energy-financial-overview';

@Injectable({
  providedIn: 'root',
})
export class EnergyFinancialOverviewService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewForUserIdGet
   */
  static readonly ApiV1EnergyFinancialOverviewForUserIdGetPath = '/api/v1/EnergyFinancialOverview/ForUser/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewForUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewForUserIdGet$Response(params: {
    id: number;
    date?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserEnergyFinancialOverview>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyFinancialOverviewService.ApiV1EnergyFinancialOverviewForUserIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('date', params.date, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserEnergyFinancialOverview>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewForUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewForUserIdGet(params: {
    id: number;
    date?: string;
    context?: HttpContext
  }
): Observable<UserEnergyFinancialOverview> {

    return this.apiV1EnergyFinancialOverviewForUserIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<UserEnergyFinancialOverview>) => r.body as UserEnergyFinancialOverview)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewForManagerIdGet
   */
  static readonly ApiV1EnergyFinancialOverviewForManagerIdGetPath = '/api/v1/EnergyFinancialOverview/ForManager/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewForManagerIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewForManagerIdGet$Response(params: {
    id: number;
    date?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ManagerEnergyFinancialOverview>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyFinancialOverviewService.ApiV1EnergyFinancialOverviewForManagerIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('date', params.date, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ManagerEnergyFinancialOverview>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewForManagerIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewForManagerIdGet(params: {
    id: number;
    date?: string;
    context?: HttpContext
  }
): Observable<ManagerEnergyFinancialOverview> {

    return this.apiV1EnergyFinancialOverviewForManagerIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ManagerEnergyFinancialOverview>) => r.body as ManagerEnergyFinancialOverview)
    );
  }

}
