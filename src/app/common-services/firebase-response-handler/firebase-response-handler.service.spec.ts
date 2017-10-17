import { TestBed, inject } from '@angular/core/testing';

import { FirebaseResponseHandlerService } from './firebase-response-handler.service';

describe('FirebaseResponseHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseResponseHandlerService]
    });
  });

  it('should be created', inject([FirebaseResponseHandlerService], (service: FirebaseResponseHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
