import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Revenue } from 'src/app/classes/Revenue';
import { ChooseAccountSharedService } from 'src/app/services/choose-account-shared.service';
import { RestService } from 'src/app/services/rest.service';
import { LoginSharedService } from 'src/app/services/login-shared.service';


@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {

  isLoggedIn: boolean = false;

  isNewLogin: boolean = false;

  revenues: Revenue[] = [];

  accountId: string;

  accountBalance: number;

  globalAccountingStatus: string;

  displayedColumns = ["date", "receiverAccount", "usage", "transfererAccount", "value", "accountingStatus"];

  constructor(private loginService: LoginSharedService, private rest: RestService, private accountService: ChooseAccountSharedService) {

   }

   showRevenues() {

    this.accountService.getAccountSource$().subscribe(
      servedAccount => {
        if(servedAccount)
        this.rest.getAccountById(servedAccount.id).subscribe(refreshedAccount => { 

          this.accountId = refreshedAccount.id;
          this.accountBalance = refreshedAccount.balance ;
          this.revenues = refreshedAccount.revenues;

          if(refreshedAccount.balance < 0) {

            this.globalAccountingStatus = 'S';

          } else {

            this.globalAccountingStatus = 'H';

          }

        }
        );
        
      }
      );

   }

   refresh() {

      this.showRevenues();

   }

  ngOnInit() {

    this.isLoggedIn = this.loginService.isLoggedIn;
    this.isNewLogin = this.loginService.isLoggedIn;

    if(this.isNewLogin == true) {

      this.revenues = null;

      this.accountBalance = 0;

    }

    if(this.revenues == undefined)

      return;

      this.showRevenues();

  }


}
