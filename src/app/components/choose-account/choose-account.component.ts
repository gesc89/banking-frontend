import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Account } from 'src/app/classes/Account';
import { ChooseAccountSharedService } from 'src/app/services/choose-account-shared.service';
import { LoginSharedService } from 'src/app/services/login-shared.service';


@Component({
  selector: 'app-choose-account',
  templateUrl: './choose-account.component.html',
  styleUrls: ['./choose-account.component.css']
})
export class ChooseAccountComponent implements OnInit, OnChanges {
  
  ngOnChanges(): void {
    debugger;
      this.sendAccount();
     
  }

  chosenAccount: Account;

  accounts: Account[] = [];

  constructor(private rest: RestService, private accountService: ChooseAccountSharedService, private loginService: LoginSharedService) {

    

   }

   sendAccount(){

    if(this.chosenAccount == undefined)
      return;

      this.accountService.changeAccount(this.chosenAccount);

      console.log(this.chosenAccount);

   }

  ngOnInit() {

    this.loginService.getLoginSource$().subscribe(
      
      servedCustomer => {

        this.accounts = servedCustomer.accounts;

    });

  }

}

