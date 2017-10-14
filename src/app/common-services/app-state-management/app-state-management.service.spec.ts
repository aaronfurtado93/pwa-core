import { TestBed, inject } from '@angular/core/testing';

import { AppStateManagementService } from './app-state-management.service';

describe('AppStateManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStateManagementService]
    });
  });

  it('should be created', inject([AppStateManagementService], (service: AppStateManagementService) => {
    expect(service).toBeTruthy();
  }));
});
