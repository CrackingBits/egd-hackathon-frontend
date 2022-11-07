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

import { TokenReqDto } from '../models/token-req-dto';
import { TokenRespDto } from '../models/token-resp-dto';
import { UserInfoDto } from '../models/user-info-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1AuthLoginInfoGet
   */
  static readonly ApiV1AuthLoginInfoGetPath = '/api/v1/Auth/LoginInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthLoginInfoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthLoginInfoGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserInfoDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthApiService.ApiV1AuthLoginInfoGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserInfoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthLoginInfoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthLoginInfoGet(params?: {
    context?: HttpContext
  }
): Observable<UserInfoDto> {

    return this.apiV1AuthLoginInfoGet$Response(params).pipe(
      map((r: StrictHttpResponse<UserInfoDto>) => r.body as UserInfoDto)
    );
  }

  /**
   * Path part for operation apiV1AuthTokenPost
   */
  static readonly ApiV1AuthTokenPostPath = '/api/v1/Auth/Token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthTokenPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthTokenPost$Plain$Response(params?: {
    context?: HttpContext
    body?: TokenReqDto
  }
): Observable<StrictHttpResponse<TokenRespDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthApiService.ApiV1AuthTokenPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TokenRespDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthTokenPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthTokenPost$Plain(params?: {
    context?: HttpContext
    body?: TokenReqDto
  }
): Observable<TokenRespDto> {

    return this.apiV1AuthTokenPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TokenRespDto>) => r.body as TokenRespDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthTokenPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthTokenPost$Json$Response(params?: {
    context?: HttpContext
    body?: TokenReqDto
  }
): Observable<StrictHttpResponse<TokenRespDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthApiService.ApiV1AuthTokenPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TokenRespDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthTokenPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthTokenPost$Json(params?: {
    context?: HttpContext
    body?: TokenReqDto
  }
): Observable<TokenRespDto> {

    return this.apiV1AuthTokenPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TokenRespDto>) => r.body as TokenRespDto)
    );
  }

}
