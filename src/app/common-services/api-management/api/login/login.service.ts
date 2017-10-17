import { Injectable } from '@angular/core';
import { IloginData } from '../../../../interfaces/ilogin-data';
import { AppStateManagementService } from '../../../app-state-management/app-state-management.service';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {FirebaseResponseHandlerService} from '../../../firebase-response-handler/firebase-response-handler.service';

@Injectable()
export class LoginService {

  constructor(
    private appStateManagementService: AppStateManagementService,
    private firebaseResponseHandlerService: FirebaseResponseHandlerService,
    private angularFireAuth: AngularFireAuth
  ) { }

  login(loginData: IloginData) {

    this.angularFireAuth.auth.signInWithCredential(
      firebase.auth.EmailAuthProvider.credential(
        loginData.username, loginData.password
      )
    )
      .then(() => this.appStateManagementService.setLS(`authentication-token`, `true`))
      .catch(reason => FirebaseResponseHandlerService.handleError(reason));
  }

}
