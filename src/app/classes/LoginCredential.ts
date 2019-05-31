import { Customer } from './Customer';

export class LoginCredential {

    id: string;
    password: string;
    customer: Customer;

    constructor(id: string, password: string, customer: Customer) {

        this.id = id;
        this.password = password;
        this.customer = customer;

    }


}