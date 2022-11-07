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

import { EconomicModelCalculationDto } from '../../../api-swagger/models/economic-model-calculation-dto';

@Injectable({
  providedIn: 'root',
})
export class EconomicModelCalculationServiceMock extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  static readonly ApiV1EconomicModelCalculationIdGetPath =
    '/economic-model-calculation-20.json';

  apiV1EconomicModelCalculationIdGet$Response(params: {
    id: number;
    context?: HttpContext;
  }): Observable<StrictHttpResponse<EconomicModelCalculationDto>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      EconomicModelCalculationServiceMock.ApiV1EconomicModelCalculationIdGetPath,
      'get'
    );
    if (params) {
      rb.path('id', params.id, {});
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
          return r as StrictHttpResponse<EconomicModelCalculationDto>;
        })
      );
  }

  apiV1EconomicModelCalculationIdGet(params: {
    id: number;
    context?: HttpContext;
  }): Observable<EconomicModelCalculationDto> {
    return this.apiV1EconomicModelCalculationIdGet$Response(params).pipe(
      map(
        (r: StrictHttpResponse<EconomicModelCalculationDto>) =>
          r.body as EconomicModelCalculationDto
      )
    );
  }
}
