import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../classes/Customer';
import { Router } from '@angular/router';
import { ChooseAccountSharedService } from './choose-account-shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoginSharedService {

  constructor(private router: Router, private accountService: ChooseAccountSharedService) { }

  private loginSource = new BehaviorSubject(undefined);

  isLoggedIn: boolean = false;

  isNewLogin: boolean = false; //todo: Backend-Validation
  

  changeLogin(customer: Customer) {

    this.isNewLogin = true;

    this.loginSource.next(customer);

  }

  getLoginSource$() {

    return this.loginSource;
    
  }

  logoutCustomer$() {

   this.loginSource.next(null);
   
   this.router.navigateByUrl('/customer/logout');

   this.accountService.changeAccount(null);

   this.isNewLogin = false;

  }

  changeLoginStatus(isLoggedIn: boolean)  {

    this.isLoggedIn = isLoggedIn;

  }

}
