import { TestBed, inject } from '@angular/core/testing';

import { MaterialSnackBarService } from './material-snack-bar.service';

describe('MaterialSnackBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialSnackBarService]
    });
  });

  it('should be created', inject([MaterialSnackBarService], (service: MaterialSnackBarService) => {
    expect(service).toBeTruthy();
  }));
});
