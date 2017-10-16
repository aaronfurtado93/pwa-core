import { TestBed, inject } from '@angular/core/testing';

import { FormManagementService } from './form-management.service';

describe('FormManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormManagementService]
    });
  });

  it('should be created', inject([FormManagementService], (service: FormManagementService) => {
    expect(service).toBeTruthy();
  }));
});
