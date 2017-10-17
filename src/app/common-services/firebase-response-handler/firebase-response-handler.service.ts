import { Injectable } from '@angular/core';
import {MaterialSnackBarService} from '../material-snack-bar/material-snack-bar.service';

@Injectable()
export class FirebaseResponseHandlerService {

  constructor(
    private materialSnackBarService: MaterialSnackBarService
  ) { }

  handleError(error: any) {
    switch (error[`code`]) {
      case `auth/user-not-found`:
      case `auth/wrong-password`:
        this.materialSnackBarService.show(`Authentication Failed`);
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
