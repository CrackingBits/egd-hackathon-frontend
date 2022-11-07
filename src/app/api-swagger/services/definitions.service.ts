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
import { DefinitionsStubDto } from '../models/definitions-stub-dto';

@Injectable({
  providedIn: 'root',
})
export class DefinitionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1DefinitionsLoadOptionsPost
   */
  static readonly ApiV1DefinitionsLoadOptionsPostPath = '/api/v1/Definitions/LoadOptions';

  /**
   * Slouží pouze pro vystavení schéma používaných objektů v API pro swagger.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1DefinitionsLoadOptionsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiV1DefinitionsLoadOptionsPost$Response(params?: {
    context?: HttpContext

    /**
     * Parametry načtení pro zobrazení v gridu.
     */
    body?: DataSourceLoadOptions
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DefinitionsService.ApiV1DefinitionsLoadOptionsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
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
   * Slouží pouze pro vystavení schéma používaných objektů v API pro swagger.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1DefinitionsLoadOptionsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiV1DefinitionsLoadOptionsPost(params?: {
    context?: HttpContext

    /**
     * Parametry načtení pro zobrazení v gridu.
     */
    body?: DataSourceLoadOptions
  }
): Observable<void> {

    return this.apiV1DefinitionsLoadOptionsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1DefinitionsGetDefinitonsGet
   */
  static readonly ApiV1DefinitionsGetDefinitonsGetPath = '/api/v1/Definitions/GetDefinitons';

  /**
   * Slouží pouze pro vystavení schéma používaných objektů v API pro swagger.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1DefinitionsGetDefinitonsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1DefinitionsGetDefinitonsGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DefinitionsStubDto>> {

    const rb = new RequestBuilder(this.rootUrl, DefinitionsService.ApiV1DefinitionsGetDefinitonsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DefinitionsStubDto>;
      })
    );
  }

  /**
   * Slouží pouze pro vystavení schéma používaných objektů v API pro swagger.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1DefinitionsGetDefinitonsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1DefinitionsGetDefinitonsGet(params?: {
    context?: HttpContext
  }
): Observable<DefinitionsStubDto> {

    return this.apiV1DefinitionsGetDefinitonsGet$Response(params).pipe(
      map((r: StrictHttpResponse<DefinitionsStubDto>) => r.body as DefinitionsStubDto)
    );
  }

}
