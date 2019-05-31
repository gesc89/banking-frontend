import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Account } from '../classes/Account';

@Injectable({
  providedIn: 'root'
})
export class ChooseAccountSharedService {

  private accountSource = new BehaviorSubject(null); 
  
  changeAccount(account: Account) {

    this.accountSource.next(account);

  }

  getAccountSource$() {

    return this.accountSource;
    
  }

  constructor() { }
}
