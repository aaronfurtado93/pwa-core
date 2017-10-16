import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {isUndefined} from 'util';

@Injectable()
export class LocalStorageService {

  private timeoutConstant = 50;
  private intervalConstant = 500;

  constructor() { }

  set(key: string, value: string): Promise<string> {
    return new Promise(
      (resolve, reject) => {
        try {
          localStorage.set(key, value);
          setTimeout(() => resolve(localStorage.getItem(key) === value ? value : undefined), this.timeoutConstant);
        } catch (reason) {
          reject(reason);
        }
      }
    );
  }

  get(key: string): Promise<string> {
    return new Promise(
      (resolve, reject) => {
        try {
          const value = localStorage.getItem(key);
          resolve(value);
        } catch (reason) {
          reject(reason);
        }
      }
    );
  }

  get$(key): Observable<string> {
    return new Observable(
      subscriber => {
        try {
          let previousValue;
          setInterval(
            () => {
              this.get(key)
                .then(currentValue => {
                  if (currentValue !== previousValue) {
                    subscriber.next(currentValue);
                    previousValue = currentValue;
                  }
                });
            },
            this.intervalConstant
          );
        } catch (reason) {
          subscriber.error(reason);
        }
      }
    );
  }

  remove(key): Promise<boolean> {
    return new Promise(
      (resolve, reject) => {
        try {
          localStorage.removeItem(key);
          setTimeout(() => resolve(isUndefined(localStorage.getItem(key))), this.timeoutConstant);
        } catch (reason) {
          reject(reason);
        }
      }
    );
  }

  removeAll(): Promise<boolean> {
    return new Promise(
      (resolve, reject) => {
        try {
          localStorage.clear();
          setTimeout(() => resolve(localStorage.length === 0), this.timeoutConstant);
        } catch (reason) {
          reject(reason);
        }
      }
    );
  }

}
