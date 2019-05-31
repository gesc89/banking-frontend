import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Account } from 'src/app/classes/Account';
import { Customer } from 'src/app/classes/Customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  customer: Customer;

  addAccountForm: FormGroup;
 
  constructor(private rest: RestService, private formBuilder: FormBuilder) {
    
    this.addAccountForm = this.formBuilder.group(

      {
        accountId: ['', {

        validators: [
  
          Validators.required,
          Validators.pattern('DE\\d{2}\\s\\d{4}\\s\\d{4}\\s\\d{4}\\s\\d{4}\\s\\d{2}')
        
          ]

        }],
  
        customerId: ['', {

        validators: [
  
          Validators.required

        ],

        }]
      }

      );

  }

  addAccount() {

    const account: Account = new Account(this.addAccountForm.get("accountId").value);

    this.rest.postAccount(account).subscribe(response => console.log(response));
    this.rest.getCustomerById(this.addAccountForm.get("customerId").value).subscribe(responseCustomer => {
        
        console.log(responseCustomer);
      
        this.rest.assignAccountToCustomer(responseCustomer, this.addAccountForm.get("accountId").value).subscribe(response =>
                                                                         console.log(response))
    });
 
    
  }

  deleteAccount() {

    this.rest.deleteAccount(this.addAccountForm.get("accountId").value).subscribe(succes => console.log(succes));

  }

  ngOnInit() {
  }

}
