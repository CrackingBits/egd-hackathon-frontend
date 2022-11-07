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
import { LoadResult } from '../models/load-result';
import { UserDto } from '../models/user-dto';
import { UserEditReq } from '../models/user-edit-req';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1UsersGridGet
   */
  static readonly ApiV1UsersGridGetPath = '/api/v1/UsersGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UsersGridGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UsersGridGet$Response(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LoadResult>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiV1UsersGridGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiV1UsersGridGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UsersGridGet(params?: {
    loadOptions?: DataSourceLoadOptions;
    context?: HttpContext
  }
): Observable<LoadResult> {

    return this.apiV1UsersGridGet$Response(params).pipe(
      map((r: StrictHttpResponse<LoadResult>) => r.body as LoadResult)
    );
  }

  /**
   * Path part for operation apiV1UsersGridPut
   */
  static readonly ApiV1UsersGridPutPath = '/api/v1/UsersGrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UsersGridPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiV1UsersGridPut$Response(params?: {
    context?: HttpContext
    body?: UserEditReq
  }
): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiV1UsersGridPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UsersGridPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiV1UsersGridPut(params?: {
    context?: HttpContext
    body?: UserEditReq
  }
): Observable<UserDto> {

    return this.apiV1UsersGridPut$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

}
