import { TestBed, inject } from '@angular/core/testing';

import { BlogthingsService } from './blogthings.service';

describe('BlogthingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogthingsService]
    });
  });

  it('should be created', inject([BlogthingsService], (service: BlogthingsService) => {
    expect(service).toBeTruthy();
  }));
});
