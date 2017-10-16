import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppStateManagementService } from '../common-services/app-state-management/app-state-management.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(
    private router: Router,
    private appStateManagementService: AppStateManagementService
  ) {
    this.appStateManagementService.getLS$(`authentication-token`)
      .subscribe(
        next => {
          if (next) {
            this.router.navigate([`page/dashboard`])
              .then(value => console.log(`page/dashboard ${value}`));
          } else {
            this.router.navigate([`page/login`])
              .then(value => console.log(`page/login ${value}`));
          }
        }
      );
  }

  ngOnInit() {
  }

}
