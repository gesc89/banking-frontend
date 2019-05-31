import { Component, OnInit } from '@angular/core';
import { LoginSharedService } from 'src/app/services/login-shared.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginSharedService) { }

  logout() {

    this.loginService.logoutCustomer$();
    this.loginService.changeLoginStatus(false);
  
  }

  

  ngOnInit() {

    this.logout();
  }

}
