import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage/local-storage.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppStateManagementService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  setLS(key, value): Promise<string> {
    return this.localStorageService.set(key, value);
  }

  getLS(key): Promise<string> {
    return this.localStorageService.get(key);
  }

  getLS$(key): Observable<string> {
    return this.localStorageService.get$(key);
  }

  removeLS(key): Promise<boolean> {
    return this.localStorageService.remove(key);
  }

  removeAllLS(): Promise<boolean> {
    return this.localStorageService.removeAll();
  }


}
