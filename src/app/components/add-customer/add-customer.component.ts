import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Postalcode } from 'src/app/classes/Postalcode';
import { Customer } from 'src/app/classes/Customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginCredential } from 'src/app/classes/LoginCredential';
import { MatcherService } from 'src/app/services/matcher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

    postalcodeId: string;
    receivedPostalcode: Postalcode;
    postalcodeCity: string;
    postalcodeCountry: string;

    

    customerForm: FormGroup;
    postalcodeForm: FormGroup;
    createAccountForm: FormGroup;

    constructor(private router: Router, private rest: RestService, private formBuilder: FormBuilder, private matcher: MatcherService) {

      this.customerForm = this.formBuilder.group(

        {
          firstname: ['', {

          validators: [
    
            Validators.required
          
            ]

          }],
    
          lastname: ['', {

          validators: [
    
            Validators.required

          ],

          }],

          adressStreet: ['', {

            validators: [
      
              Validators.required

            ],

            }],

          adressHouse: ['', {

            validators: [
        
              Validators.required

            ],

            }]
        }

        );

        this.postalcodeForm = this.formBuilder.group(

          {
            zipcode: ['', {
  
            validators: [
      
              Validators.required
            
              ]
  
            }],
      
            city: ['', {
  
            validators: [
      
              Validators.required
  
            ],
  
            }],
  
            country: ['', {
  
              validators: [
        
                Validators.required
  
              ],
  
              }]
  
          }
  
          );

          this.createAccountForm = this.formBuilder.group(

            {
              username: ['', {
    
              validators: [
        
                Validators.required
              
                ]
    
              }],
        
              password: ['', {
    
              validators: [
        
                Validators.required,
                
    
              ],
    
              }],

              confirmedPassword: ['', {

                validators: [
          
                  Validators.required,
        
                ]
        
                  }]
            },

            { 
              
              validator: this.matcher.MustMatch('password', 'confirmedPassword')
          
            }
    
            );
    
      }

      postFormCustomer() {

        if (!this.customerForm.valid || !this.postalcodeForm.valid) {
    
          return ('invalid');
    
        }

        const postalcode: Postalcode = new Postalcode(this.postalcodeForm.get('zipcode').value, this.postalcodeForm.get('city').value, 
                                                      this.postalcodeForm.get('country').value);

          const customer = new Customer(
          this.customerForm.get('firstname').value, 
          this.customerForm.get('lastname').value,
          this.customerForm.get('adressStreet').value,
          this.customerForm.get('adressHouse').value,
          postalcode,
         
          )

          this.rest.postCustomer(customer).subscribe(
            responseCustomer => {
              
              console.log(responseCustomer)
            
              if(customer == undefined)
                return;

              const loginCredential: LoginCredential = new LoginCredential(this.createAccountForm.get('username').value, this.createAccountForm.get('password').value, responseCustomer);

              if(loginCredential == undefined)
                return;

              this.rest.postLoginCredential(loginCredential).subscribe(responseLoginCredential => console.log(responseLoginCredential));

              
              
            });

            this.router.navigateByUrl('/customer/login');

    }
  
  ngOnInit() {

  }

}
