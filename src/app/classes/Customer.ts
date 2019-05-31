import { Postalcode } from './Postalcode';
import { Account } from './Account';

export class Customer {

    customer_id: number;  
    firstname: string;
    lastname: string;
    adressStreet: string;
    adressHouse: string;
    adress_postalcode: Postalcode;
    accounts: Set<Account>;
    

    constructor(firstname: string, lastname: string,
                adressStreet: string, adressHouse: string,
                adressPostalcode: Postalcode)
                 {

                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.adressStreet = adressStreet;
                    this.adressHouse = adressHouse;
                    this.adress_postalcode = adressPostalcode;
                   

                 }

   getId(): number {

      return this.customer_id;

   }

}