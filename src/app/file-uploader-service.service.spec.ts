import { TestBed, inject } from '@angular/core/testing';

import { FileUploaderServiceService } from './file-uploader-service.service';

describe('FileUploaderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileUploaderServiceService]
    });
  });

  it('should be created', inject([FileUploaderServiceService], (service: FileUploaderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
