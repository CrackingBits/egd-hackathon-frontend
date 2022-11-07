/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiConfiguration } from '../../../api-swagger/api-configuration';
import { BaseService } from '../../../api-swagger/base-service';

import { TokenReqDto } from '../../../api-swagger/models/token-req-dto';
import { TokenRespDto } from '../../../api-swagger/models/token-resp-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthApiServiceMock extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  apiV1AuthTokenPost$Json(params?: {
    context?: HttpContext;
    body?: TokenReqDto;
  }): Observable<TokenRespDto> {
    return of<TokenRespDto>({
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwaW9qZ3llRkxKUDhUYzdmeDl5Um5vTk1JR3IxIiwianRpIjoiNTVmMWM0NjAtMjI5NC00NGJkLWEwZTMtZjNkZGFiOGFiMTUyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzOSIsImV4cCI6MTY2ODA3NDk3NywiaXNzIjoiY3JiLWhhY2thdGhvbi1iYWNrZW5kIiwiYXVkIjoiY3JiLWhhY2thdGhvbi1iYWNrZW5kIn0.qY2bT1OxkIJLLHdByX6QLOlCWXS4ypZvnI1H8zUpEKI',
      userId: 0,
    } as TokenRespDto);
  }
}
