import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppStateManagementService } from '../../../app-state-management/app-state-management.service';
import { FirebaseResponseHandlerService } from '../../../firebase-response-handler/firebase-response-handler.service';
import { IloginRegisterData } from '../../../../interfaces/ilogin-data';

@Injectable()
export class RegisterService {

  constructor(
    private appStateManagementService: AppStateManagementService,
    private firebaseResponseHandlerService: FirebaseResponseHandlerService,
    private angularFireAuth: AngularFireAuth
  ) { }

  register(registerData: IloginRegisterData) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(
      registerData.username,
      registerData.password
    )
      .then(value => {
        console.log(value);
        return this.appStateManagementService.setLS(`authentication-token`, `true`);
      })
      .catch(reason => this.firebaseResponseHandlerService.handleError(reason));
  }

}
