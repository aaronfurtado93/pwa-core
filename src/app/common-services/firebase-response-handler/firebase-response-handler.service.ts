import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseResponseHandlerService {

  constructor() { }

  static handleError(error: any) {
    switch (error[`code`]) {
      case `auth/user-not-found`:
      case `auth/wrong-password`:
        console.log(`Authentication Failed`);
        return;
      case `auth/network-request-failed`:
        console.log(`Network Error! Please check your internet connection`);
        return;
      default:
        console.log(error);
    }
    return;
  }
}
