import { TestBed } from '@angular/core/testing';
import { ApplicationConfig, APP_CONFIG } from '../models/app-config';

import { TitleService } from './title.service';

describe('TitleService', () => {
  let service: TitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: APP_CONFIG, useValue: ApplicationConfig }],
    });
    service = TestBed.inject(TitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
