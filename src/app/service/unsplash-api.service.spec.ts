import { TestBed } from '@angular/core/testing';

import { UnsplashAPIService } from './unsplash-api.service';

describe('UnsplashAPIService', () => {
  let service: UnsplashAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
