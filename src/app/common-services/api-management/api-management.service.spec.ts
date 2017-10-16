import { TestBed, inject } from '@angular/core/testing';

import { ApiManagementService } from './api-management.service';

describe('ApiManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiManagementService]
    });
  });

  it('should be created', inject([ApiManagementService], (service: ApiManagementService) => {
    expect(service).toBeTruthy();
  }));
});
