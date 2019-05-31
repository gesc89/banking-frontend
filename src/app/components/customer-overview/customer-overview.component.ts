import { Component, OnInit } from '@angular/core';
import { LoginSharedService } from 'src/app/services/login-shared.service';
import { Customer } from 'src/app/classes/Customer';
import { Postalcode } from 'src/app/classes/Postalcode';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {

  constructor(private loginService: LoginSharedService) { }

  loggedInCustomer: Customer;

  customerArray: Customer[] = [];

  isLoggedIn: boolean = false;
  isNewLogin: boolean = false;
  selfUpdateIsOn: boolean;

  displayedColumnsCustomer = ["firstname", "lastname", "adressStreet", "adressHouse",
                              "postalcode", "city", "country"];
 

  ngOnInit() {

    this.isLoggedIn = this.loginService.isLoggedIn;
    this.isNewLogin = this.loginService.isNewLogin;

    if(this.isNewLogin == true) {

      this.loggedInCustomer = null;

    }

    

    this.loginService.getLoginSource$().subscribe(servedCustomer => {

      this.loggedInCustomer = servedCustomer;

      if(this.loggedInCustomer == undefined)
        return;

      this.customerArray.push(this.loggedInCustomer);
 
    });

  }

  toggleSelfUpdate() {

    this.selfUpdateIsOn = !this.selfUpdateIsOn;

  }

}
