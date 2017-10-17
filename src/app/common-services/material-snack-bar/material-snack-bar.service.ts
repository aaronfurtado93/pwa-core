import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class MaterialSnackBarService {

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  show(message?: string, action?: string) {
    this.matSnackBar.open(
      message || ``,
      action || `OK`,
      {
        duration: 3000,
        politeness: 'assertive',
        verticalPosition: 'bottom'
      }
    );
  }

}
