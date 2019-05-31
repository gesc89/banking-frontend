import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Revenue } from 'src/app/classes/Revenue';
import { ChooseAccountSharedService } from 'src/app/services/choose-account-shared.service';
import { Account } from 'src/app/classes/Account';
import { LoginSharedService } from 'src/app/services/login-shared.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  revenueForm: FormGroup;

  transfererAccount: Account;

  isLoggedIn: boolean = false;



  constructor(private loginService: LoginSharedService, private rest: RestService, formBuilder: FormBuilder, private accountService: ChooseAccountSharedService) {

    this.accountService.getAccountSource$().subscribe(
      
      transfererAccount => this.transfererAccount = transfererAccount );
      this.revenueForm = formBuilder.group(

        {
          value: ['', {

            validators: [

              Validators.required,
              Validators.min(1),
              Validators.pattern("\\d*[.]?\\d*")

            ]

          }],

          date: ['', {

            validators: [

              Validators.required

            ],

          }],

          usage: ['', {

            validators: [

              Validators.required

            ],

          }],

          otherAccountId: ['', {

            validators: [

              Validators.required,
              Validators.pattern('DE\\d{2}\\s\\d{4}\\s\\d{4}\\s\\d{4}\\s\\d{4}\\s\\d{2}')
              

            ]

          }]

        }

      );

  }

  transferMoney() {
          
      if(this.transfererAccount == undefined)
        return;
        
        const transfererRevenue: Revenue = new Revenue(this.revenueForm.get('value').value,
                                             this.revenueForm.get('usage').value,
                                             this.revenueForm.get('otherAccountId').value,
                                             this.transfererAccount.id,
                                             "S"
                                            );

        const receiverRevenue: Revenue = new Revenue(this.revenueForm.get('value').value,
                                                       this.revenueForm.get('usage').value,
                                                       this.revenueForm.get('otherAccountId').value,
                                                       this.transfererAccount.id,
                                                       "H"
                                                       );

      if(transfererRevenue == undefined || receiverRevenue == undefined)
        return;

        const revenues: Revenue[] = [];
        revenues.push(transfererRevenue);
        revenues.push(receiverRevenue);

      if(revenues == undefined || revenues.length == 0)
        return;

      this.rest.postRevenues(revenues, this.transfererAccount.id, this.revenueForm.get('otherAccountId').value).subscribe(
        
        responseRevenue => {
          
          console.log(responseRevenue);
          
        },
        
        error => {

          alert("Unzureichende Mittel");

        }
        
        );
     
  }

  

  ngOnInit() {

    this.isLoggedIn = this.loginService.isLoggedIn;

  }

}
