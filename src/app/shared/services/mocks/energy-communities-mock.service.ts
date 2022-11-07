/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiConfiguration } from '../../../api-swagger/api-configuration';
import { BaseService } from '../../../api-swagger/base-service';
import { RequestBuilder } from '../../../api-swagger/request-builder';
import { StrictHttpResponse } from '../../../api-swagger/strict-http-response';

import { DataSourceLoadOptions } from '../../../api-swagger/models/data-source-load-options';
import { LoadResult } from '../../../api-swagger/models/load-result';

@Injectable({
  providedIn: 'root',
})
export class EnergyCommunitiesServiceMock extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  static readonly ApiV1EnergyFinancialOverviewCommunityGridGetPath =
    '/community-mock.json';

  apiV1EnergyFinancialOverviewCommunityGridGet$Response(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext;
  }): Observable<StrictHttpResponse<LoadResult>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      EnergyCommunitiesServiceMock.ApiV1EnergyFinancialOverviewCommunityGridGetPath,
      'get'
    );
    if (params) {
      rb.query('loadOptions', params.loadOptions, {});
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
          return r as StrictHttpResponse<LoadResult>;
        })
      );
  }

  apiV1EnergyFinancialOverviewCommunityGridGet(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext;
  }): Observable<LoadResult> {
    return this.apiV1EnergyFinancialOverviewCommunityGridGet$Response(
      params
    ).pipe(map((r: StrictHttpResponse<LoadResult>) => r.body as LoadResult));
  }
}
