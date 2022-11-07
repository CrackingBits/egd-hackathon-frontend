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

import { CollectionPointDto } from '../models/collection-point-dto';
import { DataSourceLoadOptions } from '../models/data-source-load-options';
import { EconomicModelCalculationCreateReq } from '../models/economic-model-calculation-create-req';
import { EconomicModelCalculationDto } from '../models/economic-model-calculation-dto';
import { EconomicModelCalculationEditReq } from '../models/economic-model-calculation-edit-req';
import { LoadResult } from '../models/load-result';

@Injectable({
  providedIn: 'root',
})
export class EconomicModelCalculationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationGridGet
   */
  static readonly ApiV1EconomicModelCalculationGridGetPath = '/api/v1/EconomicModelCalculationGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationGridGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EconomicModelCalculationGridGet$Response(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LoadResult>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationGridGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationGridGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EconomicModelCalculationGridGet(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext
  }
): Observable<LoadResult> {

    return this.apiV1EconomicModelCalculationGridGet$Response(params).pipe(
      map((r: StrictHttpResponse<LoadResult>) => r.body as LoadResult)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationGridPut
   */
  static readonly ApiV1EconomicModelCalculationGridPutPath = '/api/v1/EconomicModelCalculationGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationGridPut()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationGridPut$Response(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
'values'?: string;
}
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationGridPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationGridPut$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationGridPut(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
'values'?: string;
}
  }
): Observable<void> {

    return this.apiV1EconomicModelCalculationGridPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationGridPost
   */
  static readonly ApiV1EconomicModelCalculationGridPostPath = '/api/v1/EconomicModelCalculationGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationGridPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationGridPost$Response(params?: {
    context?: HttpContext
    body?: {
'values'?: string;
}
  }
): Observable<StrictHttpResponse<EconomicModelCalculationDto>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationGridPostPath, 'post');
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
        return r as StrictHttpResponse<EconomicModelCalculationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationGridPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationGridPost(params?: {
    context?: HttpContext
    body?: {
'values'?: string;
}
  }
): Observable<EconomicModelCalculationDto> {

    return this.apiV1EconomicModelCalculationGridPost$Response(params).pipe(
      map((r: StrictHttpResponse<EconomicModelCalculationDto>) => r.body as EconomicModelCalculationDto)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationGridDelete
   */
  static readonly ApiV1EconomicModelCalculationGridDeletePath = '/api/v1/EconomicModelCalculationGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationGridDelete()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationGridDelete$Response(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
}
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationGridDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationGridDelete$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationGridDelete(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
}
  }
): Observable<void> {

    return this.apiV1EconomicModelCalculationGridDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationIdGet
   */
  static readonly ApiV1EconomicModelCalculationIdGetPath = '/api/v1/EconomicModelCalculation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EconomicModelCalculationIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<EconomicModelCalculationDto>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationIdGetPath, 'get');
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
        return r as StrictHttpResponse<EconomicModelCalculationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EconomicModelCalculationIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<EconomicModelCalculationDto> {

    return this.apiV1EconomicModelCalculationIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<EconomicModelCalculationDto>) => r.body as EconomicModelCalculationDto)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationIdPut
   */
  static readonly ApiV1EconomicModelCalculationIdPutPath = '/api/v1/EconomicModelCalculation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1EconomicModelCalculationIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: EconomicModelCalculationEditReq
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1EconomicModelCalculationIdPut(params: {
    id: number;
    context?: HttpContext
    body?: EconomicModelCalculationEditReq
  }
): Observable<void> {

    return this.apiV1EconomicModelCalculationIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationIdDelete
   */
  static readonly ApiV1EconomicModelCalculationIdDeletePath = '/api/v1/EconomicModelCalculation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EconomicModelCalculationIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EconomicModelCalculationIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiV1EconomicModelCalculationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationPost
   */
  static readonly ApiV1EconomicModelCalculationPostPath = '/api/v1/EconomicModelCalculation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1EconomicModelCalculationPost$Response(params?: {
    context?: HttpContext
    body?: EconomicModelCalculationCreateReq
  }
): Observable<StrictHttpResponse<EconomicModelCalculationDto>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationPostPath, 'post');
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
        return r as StrictHttpResponse<EconomicModelCalculationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1EconomicModelCalculationPost(params?: {
    context?: HttpContext
    body?: EconomicModelCalculationCreateReq
  }
): Observable<EconomicModelCalculationDto> {

    return this.apiV1EconomicModelCalculationPost$Response(params).pipe(
      map((r: StrictHttpResponse<EconomicModelCalculationDto>) => r.body as EconomicModelCalculationDto)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationIdCalculatePut
   */
  static readonly ApiV1EconomicModelCalculationIdCalculatePutPath = '/api/v1/EconomicModelCalculation/{id}/Calculate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationIdCalculatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1EconomicModelCalculationIdCalculatePut$Response(params: {
    id: number;
    context?: HttpContext
    body?: EconomicModelCalculationEditReq
  }
): Observable<StrictHttpResponse<EconomicModelCalculationDto>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationIdCalculatePutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EconomicModelCalculationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationIdCalculatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1EconomicModelCalculationIdCalculatePut(params: {
    id: number;
    context?: HttpContext
    body?: EconomicModelCalculationEditReq
  }
): Observable<EconomicModelCalculationDto> {

    return this.apiV1EconomicModelCalculationIdCalculatePut$Response(params).pipe(
      map((r: StrictHttpResponse<EconomicModelCalculationDto>) => r.body as EconomicModelCalculationDto)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationCollectionPointsGridGet
   */
  static readonly ApiV1EconomicModelCalculationCollectionPointsGridGetPath = '/api/v1/EconomicModelCalculation/CollectionPointsGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationCollectionPointsGridGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EconomicModelCalculationCollectionPointsGridGet$Response(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LoadResult>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationCollectionPointsGridGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationCollectionPointsGridGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1EconomicModelCalculationCollectionPointsGridGet(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext
  }
): Observable<LoadResult> {

    return this.apiV1EconomicModelCalculationCollectionPointsGridGet$Response(params).pipe(
      map((r: StrictHttpResponse<LoadResult>) => r.body as LoadResult)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationCollectionPointsGridPut
   */
  static readonly ApiV1EconomicModelCalculationCollectionPointsGridPutPath = '/api/v1/EconomicModelCalculation/CollectionPointsGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationCollectionPointsGridPut()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationCollectionPointsGridPut$Response(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
'values'?: string;
}
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationCollectionPointsGridPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationCollectionPointsGridPut$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationCollectionPointsGridPut(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
'values'?: string;
}
  }
): Observable<void> {

    return this.apiV1EconomicModelCalculationCollectionPointsGridPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationCollectionPointsGridPost
   */
  static readonly ApiV1EconomicModelCalculationCollectionPointsGridPostPath = '/api/v1/EconomicModelCalculation/CollectionPointsGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationCollectionPointsGridPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationCollectionPointsGridPost$Response(params?: {
    context?: HttpContext
    body?: {
'values'?: string;
}
  }
): Observable<StrictHttpResponse<CollectionPointDto>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationCollectionPointsGridPostPath, 'post');
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
        return r as StrictHttpResponse<CollectionPointDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationCollectionPointsGridPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationCollectionPointsGridPost(params?: {
    context?: HttpContext
    body?: {
'values'?: string;
}
  }
): Observable<CollectionPointDto> {

    return this.apiV1EconomicModelCalculationCollectionPointsGridPost$Response(params).pipe(
      map((r: StrictHttpResponse<CollectionPointDto>) => r.body as CollectionPointDto)
    );
  }

  /**
   * Path part for operation apiV1EconomicModelCalculationCollectionPointsGridDelete
   */
  static readonly ApiV1EconomicModelCalculationCollectionPointsGridDeletePath = '/api/v1/EconomicModelCalculation/CollectionPointsGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1EconomicModelCalculationCollectionPointsGridDelete()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationCollectionPointsGridDelete$Response(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
}
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EconomicModelCalculationService.ApiV1EconomicModelCalculationCollectionPointsGridDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiV1EconomicModelCalculationCollectionPointsGridDelete$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiV1EconomicModelCalculationCollectionPointsGridDelete(params?: {
    context?: HttpContext
    body?: {
'key'?: number;
}
  }
): Observable<void> {

    return this.apiV1EconomicModelCalculationCollectionPointsGridDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
