import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Postalcode } from 'src/app/classes/Postalcode';
import { Customer } from 'src/app/classes/Customer';

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent implements OnInit {

  customerId: number;
  loginId: string;

  deleteLogin() {

    this.rest.deleteLoginCredential(this.loginId).subscribe(succes => console.log(succes));

  }

  deleteCustomer() {

    this.rest.deleteCustomer(this.customerId).subscribe(succes => console.log(succes));

  }

    customerForm: FormGroup;
    postalcodeForm: FormGroup;

    constructor(private rest: RestService, private formBuilder: FormBuilder) {

      this.customerForm = this.formBuilder.group(

        {
          customer_id: ['', {

            validators: [
      
              Validators.required
            
              ]

            }],

          firstname: ['', {

          validators: [
    
            
          
            ]

          }],
    
          lastname: ['', {

          validators: [
    
           

          ],

          }],

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

      updateFormCustomer() {

        if (!this.customerForm.valid || !this.postalcodeForm.valid) {
    
          return ('invalid');
    
        }

          const dummyPostalcode: Postalcode = new Postalcode(this.postalcodeForm.get('zipcode').value, this.postalcodeForm.get('city').value, 
                                                             this.postalcodeForm.get('country').value);

          const dummyCustomer = new Customer(
          this.customerForm.get('firstname').value, 
          this.customerForm.get('lastname').value,
          this.customerForm.get('adressStreet').value,
          this.customerForm.get('adressHouse').value,
          dummyPostalcode,
         
          )

          this.rest.updateCustomer(this.customerForm.get('customer_id').value, dummyCustomer).subscribe(
            responseCustomer => {
              
              console.log(responseCustomer)
            
            });

    }

  ngOnInit() {
  }

}
