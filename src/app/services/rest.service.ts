import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Customer } from '../classes/Customer';
import { Observable } from 'rxjs';
import { Postalcode } from '../classes/Postalcode';
import { Revenue } from '../classes/Revenue';
import { Account } from '../classes/Account';
import { LoginCredential } from '../classes/LoginCredential';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

    URL = 'http://localhost:8080/';

    postCustomer(customer: Customer): Observable<Customer> {
  
      return this.http.post<Customer>(this.URL + 'postCustomer', customer);

    }

    getCustomers(): Observable<Customer[]> {

      return this.http.get<Customer[]>(this.URL + 'getCustomers');

    }

    getCustomerById(id: number): Observable<Customer> {

      return this.http.get<Customer>(this.URL + 'getCustomer/' + id);

    }

    deleteCustomer(id: number): Observable<Customer>{

      return this.http.delete<Customer>(this.URL + 'deleteCustomer/' + id);

    }

    updateCustomer(id: number, dummyCustomer: Customer): Observable<Customer> {

      return this.http.put<Customer>(this.URL + 'updateCustomer/' + id,
                                     dummyCustomer);

    }

    postAccount(account: Account): Observable<Account> {

      return this.http.post<Account>(this.URL + 'postAccount', account);

    }

    getAccounts(): Observable<Account[]> {

      return this.http.get<Account[]>(this.URL + 'getAccounts');

    }

    getAccountById(id: string): Observable<Account> {

      return this.http.get<Account>(this.URL + 'getAccount/' + id);

    }

    deleteAccount(id: string): Observable<Account> {

      return this.http.delete<Account>(this.URL + 'deleteAccount/' + id);

    }

    postPostalcode(postalcode: Postalcode): Observable<Postalcode> {

      return this.http.post<Postalcode>(this.URL + 'postPostalcode', postalcode);

    }

    getPostalcodes(): Observable<Postalcode[]> {

      return this.http.get<Postalcode[]>(this.URL + 'getPostalcodes');

    }

    getPostalcodeById(id: string): Observable<Postalcode> {

      return this.http.get<Postalcode>(this.URL + 'getPostalcode/' + id);

    }


    getRevenues(): Observable<Revenue[]> {

      return this.http.get<Revenue[]>(this.URL + 'getRevenues');

    }

    getRevenueById(id: number): Observable<Revenue> {

      return this.http.get<Revenue>(this.URL + 'getRevenue/' + id);

    }

    postLoginCredential(loginCredential: LoginCredential): Observable<LoginCredential> {

      return this.http.post<LoginCredential>(this.URL + 'postLoginCredential', loginCredential);

    }

    getLoginCredentialById(id: string): Observable<HttpResponse<LoginCredential>> {

      return this.http.get<LoginCredential>(this.URL + 'getLoginCredential/' + id, {observe: 'response'});

    }

    deleteLoginCredential(id: string): Observable<LoginCredential> {

      return this.http.delete<LoginCredential>(this.URL + 'deleteLoginCredential/' + id);

    }

    checkPassword(id: string, password: string): Observable<boolean> {

      return this.http.get<boolean>(this.URL + 'checkPassword/' + id + '/' + password);

    }

    updateAccount(account: Account): Observable<Account> {

      return this.http.put<Account>(this.URL + 'updateAccount',
                                    account);

    }

    assignAccountToCustomer(customer: Customer, accountId: string): Observable<Customer> {

      return this.http.put<Customer>(this.URL + 'assignAccountToCustomer/' + accountId,
                                    customer);

    }

    postRevenues(revenues: Revenue[], transfererAccountId: string, otherAccountId: string) {

      return this.http.post<Revenue[]>(this.URL + 'postRevenues/' + transfererAccountId + '/' + otherAccountId, revenues);

    }

}
