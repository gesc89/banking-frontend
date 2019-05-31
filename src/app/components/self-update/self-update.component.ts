import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Postalcode } from 'src/app/classes/Postalcode';
import { Customer } from 'src/app/classes/Customer';
import { RestService } from 'src/app/services/rest.service';
import { LoginSharedService } from 'src/app/services/login-shared.service';

@Component({
  selector: 'app-self-update',
  templateUrl: './self-update.component.html',
  styleUrls: ['./self-update.component.css']
})
export class SelfUpdateComponent implements OnInit {

  customerForm: FormGroup;
  postalcodeForm: FormGroup;

  loggedInCustomer: Customer;

  constructor(private loginService: LoginSharedService, private rest: RestService, private formBuilder: FormBuilder) {

    this.customerForm = this.formBuilder.group(

      {
        
        adressStreet: ['', {

          validators: [
    
           

          ],

          }],

        adressHouse: ['', {

          validators: [
      
           

          ],

          }]
      }

      );

      this.postalcodeForm = this.formBuilder.group(

        {
          zipcode: ['', {

          validators: [
    
           
          
            ]

          }],
    
          city: ['', {

          validators: [
    
           

          ],

          }],

          country: ['', {

            validators: [
      
             

            ],

            }]

        }

        );

   }

   selfUpdateFormCustomer() {

    if (!this.customerForm.valid || !this.postalcodeForm.valid) {

      return ('invalid');

    }
    //todo: UpdatePostalcode
      const dummyPostalcode: Postalcode = new Postalcode(this.postalcodeForm.get('zipcode').value, this.postalcodeForm.get('city').value, 
                                                         this.postalcodeForm.get('country').value);

      const dummyCustomer = new Customer(
      "", 
      "",
      this.customerForm.get('adressStreet').value,
      this.customerForm.get('adressHouse').value,
      dummyPostalcode,
     
      )

      if(this.loggedInCustomer == undefined)
        return;

      this.rest.updateCustomer(this.loggedInCustomer.customer_id, dummyCustomer).subscribe(
        responseCustomer => {
          
          console.log(responseCustomer)

          this.loginService.changeLogin(responseCustomer);
        
        });

}

  ngOnInit() {

    this.loginService.getLoginSource$().subscribe(servedCustomer => {

      this.loggedInCustomer = servedCustomer;
    
    })

  }

}
