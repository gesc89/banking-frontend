import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { LoginSharedService } from '../services/login-shared.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private rest: RestService, private loginService: LoginSharedService, private router: Router) {

    this.loginForm = this.formBuilder.group(

      {
        id: ['', {

        validators: [
  
          Validators.required
        
          ]

        }],
  
        password: ['', {

        validators: [
  
          Validators.required

        ]

          }],

      }

      );

   }


   loginForm: FormGroup;

   id: string;
   password: string;
   
   login() {

    if(this.loginForm.get('id').value == undefined || this.loginForm.get('password').value == undefined)
      return;

      this.rest.getLoginCredentialById(this.loginForm.get('id').value).subscribe(idSucess => {

        this.rest.checkPassword(this.loginForm.get('id').value, this.loginForm.get('password').value).subscribe(passwordSucess => {

          if(passwordSucess) {
           
            console.log("Login erfolgreich!");
            this.router.navigateByUrl('/customer/revenues');
            this.loginService.changeLoginStatus(true);

          } else {

            alert("Passwort fehlerhaft!");

          }

          this.loginService.changeLogin(idSucess.body.customer);

        },

        passwordError => {

          if(passwordError.status == 404) {

            alert("Fehler 404: Benutzer nicht vorhanden oder Passwort fehlerhaft!");

          }  

        }
        );
      
      },    
        idError => {

          if(idError.status == 404) {

            alert("Fehler 404: Benutzer nicht vorhanden oder Passwort fehlerhaft!");

          }  

        }
      );
      
   }

   get f() {

    return this.loginForm.controls;

   }

  ngOnInit() {

  }

}
