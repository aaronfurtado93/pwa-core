import { Component, OnInit } from '@angular/core';
import {AppStateManagementService} from '../../common-services/app-state-management/app-state-management.service';
import 'rxjs/add/operator/map';
import {ApiManagementService} from '../../common-services/api-management/api-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(
    private appStateManagementService: AppStateManagementService,
    private apiManagementService: ApiManagementService
  ) {
    this.appStateManagementService.getLS$(`authentication-token`)
      .map(value => !!value)
      .subscribe(next => this.isLoggedIn = next);
  }

  ngOnInit() {
  }

  logout() {
    this.apiManagementService.logout();
  }

}
