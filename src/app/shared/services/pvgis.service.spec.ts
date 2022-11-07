import { TestBed } from '@angular/core/testing';

import { PvGisService } from './pvgis.service';

describe('PvGisService', () => {
  let service: PvGisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvGisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
