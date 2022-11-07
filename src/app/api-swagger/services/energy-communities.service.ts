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

import { DataSourceLoadOptions } from '../models/data-source-load-options';
import { EnergyCommunityCollectionPointDto } from '../models/energy-community-collection-point-dto';
import { EnergyCommunityCreateReq } from '../models/energy-community-create-req';
import { EnergyCommunityDto } from '../models/energy-community-dto';
import { EnergyCommunityEditReq } from '../models/energy-community-edit-req';
import { LoadResult } from '../models/load-result';

@Injectable({
  providedIn: 'root',
})
export class EnergyCommunitiesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityGridGet
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityGridGetPath = '/api/v1/EnergyFinancialOverview/CommunityGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityGridGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewCommunityGridGet$Response(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LoadResult>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityGridGetPath, 'get');
    if (params) {
      rb.query('loadOptions', params.loadOptions, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoadResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityGridGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewCommunityGridGet(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext
  }
): Observable<LoadResult> {

    return this.apiV1EnergyFinancialOverviewCommunityGridGet$Response(params).pipe(
      map((r: StrictHttpResponse<LoadResult>) => r.body as LoadResult)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityGridPut
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityGridPutPath = '/api/v1/EnergyFinancialOverview/CommunityGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityGridPut()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityGridPut$Response(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
'values'?: string;
}
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityGridPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityGridPut$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityGridPut(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
'values'?: string;
}
  }
): Observable<void> {

    return this.apiV1EnergyFinancialOverviewCommunityGridPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityGridPost
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityGridPostPath = '/api/v1/EnergyFinancialOverview/CommunityGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityGridPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityGridPost$Response(params?: {
    context?: HttpContext
    body?: {
'values'?: string;
}
  }
): Observable<StrictHttpResponse<EnergyCommunityDto>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityGridPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EnergyCommunityDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityGridPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityGridPost(params?: {
    context?: HttpContext
    body?: {
'values'?: string;
}
  }
): Observable<EnergyCommunityDto> {

    return this.apiV1EnergyFinancialOverviewCommunityGridPost$Response(params).pipe(
      map((r: StrictHttpResponse<EnergyCommunityDto>) => r.body as EnergyCommunityDto)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityGridDelete
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityGridDeletePath = '/api/v1/EnergyFinancialOverview/CommunityGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityGridDelete()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityGridDelete$Response(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
}
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityGridDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityGridDelete$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityGridDelete(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
}
  }
): Observable<void> {

    return this.apiV1EnergyFinancialOverviewCommunityGridDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityIdGet
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityIdGetPath = '/api/v1/EnergyFinancialOverview/Community/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewCommunityIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<EnergyCommunityDto>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EnergyCommunityDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewCommunityIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<EnergyCommunityDto> {

    return this.apiV1EnergyFinancialOverviewCommunityIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<EnergyCommunityDto>) => r.body as EnergyCommunityDto)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityIdPut
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityIdPutPath = '/api/v1/EnergyFinancialOverview/Community/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1EnergyFinancialOverviewCommunityIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: EnergyCommunityEditReq
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1EnergyFinancialOverviewCommunityIdPut(params: {
    id: number;
    context?: HttpContext
    body?: EnergyCommunityEditReq
  }
): Observable<void> {

    return this.apiV1EnergyFinancialOverviewCommunityIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityIdDelete
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityIdDeletePath = '/api/v1/EnergyFinancialOverview/Community/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewCommunityIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewCommunityIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiV1EnergyFinancialOverviewCommunityIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityPost
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityPostPath = '/api/v1/EnergyFinancialOverview/Community';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1EnergyFinancialOverviewCommunityPost$Response(params?: {
    context?: HttpContext
    body?: EnergyCommunityCreateReq
  }
): Observable<StrictHttpResponse<EnergyCommunityDto>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EnergyCommunityDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1EnergyFinancialOverviewCommunityPost(params?: {
    context?: HttpContext
    body?: EnergyCommunityCreateReq
  }
): Observable<EnergyCommunityDto> {

    return this.apiV1EnergyFinancialOverviewCommunityPost$Response(params).pipe(
      map((r: StrictHttpResponse<EnergyCommunityDto>) => r.body as EnergyCommunityDto)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityCollectionPointsGridGet
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityCollectionPointsGridGetPath = '/api/v1/EnergyFinancialOverview/CommunityCollectionPointsGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityCollectionPointsGridGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewCommunityCollectionPointsGridGet$Response(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LoadResult>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityCollectionPointsGridGetPath, 'get');
    if (params) {
      rb.query('loadOptions', params.loadOptions, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoadResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityCollectionPointsGridGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EnergyFinancialOverviewCommunityCollectionPointsGridGet(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext
  }
): Observable<LoadResult> {

    return this.apiV1EnergyFinancialOverviewCommunityCollectionPointsGridGet$Response(params).pipe(
      map((r: StrictHttpResponse<LoadResult>) => r.body as LoadResult)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPut
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityCollectionPointsGridPutPath = '/api/v1/EnergyFinancialOverview/CommunityCollectionPointsGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPut()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPut$Response(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
'values'?: string;
}
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityCollectionPointsGridPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPut$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPut(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
'values'?: string;
}
  }
): Observable<void> {

    return this.apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPost
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityCollectionPointsGridPostPath = '/api/v1/EnergyFinancialOverview/CommunityCollectionPointsGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPost$Response(params?: {
    context?: HttpContext
    body?: {
'values'?: string;
}
  }
): Observable<StrictHttpResponse<EnergyCommunityCollectionPointDto>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityCollectionPointsGridPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EnergyCommunityCollectionPointDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPost(params?: {
    context?: HttpContext
    body?: {
'values'?: string;
}
  }
): Observable<EnergyCommunityCollectionPointDto> {

    return this.apiV1EnergyFinancialOverviewCommunityCollectionPointsGridPost$Response(params).pipe(
      map((r: StrictHttpResponse<EnergyCommunityCollectionPointDto>) => r.body as EnergyCommunityCollectionPointDto)
    );
  }

  /**
   * Path part for operation apiV1EnergyFinancialOverviewCommunityCollectionPointsGridDelete
   */
  static readonly ApiV1EnergyFinancialOverviewCommunityCollectionPointsGridDeletePath = '/api/v1/EnergyFinancialOverview/CommunityCollectionPointsGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EnergyFinancialOverviewCommunityCollectionPointsGridDelete()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityCollectionPointsGridDelete$Response(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
}
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EnergyCommunitiesService.ApiV1EnergyFinancialOverviewCommunityCollectionPointsGridDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EnergyFinancialOverviewCommunityCollectionPointsGridDelete$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EnergyFinancialOverviewCommunityCollectionPointsGridDelete(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
}
  }
): Observable<void> {

    return this.apiV1EnergyFinancialOverviewCommunityCollectionPointsGridDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
