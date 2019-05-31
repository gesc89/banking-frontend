import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AccountOverviewComponent } from './components/account-overview/account-overview.component';
import { TransferComponent } from './components/choose-account/transfer/transfer.component';
import { ChooseAccountComponent } from './components/choose-account/choose-account.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CustomerOverviewComponent } from './components/customer-overview/customer-overview.component';
import { UpdateCustomersComponent } from './components/update-customers/update-customers.component';

const routes: Routes = [

  {
    "path": 'customer/register',
    component: AddCustomerComponent
  },

  {
    "path": 'admin/addAccount',
    component: AddAccountComponent
  },

  {
    "path": 'customer/revenues',
    component: AccountOverviewComponent
  },

  {
    "path": 'customer/transfer',
    component: TransferComponent
  },

  {
    "path": 'customer/accounts',
    component: ChooseAccountComponent
  },

  {
    "path": 'customer/login',
    component: LoginComponent
  },

  {
    "path": 'customer/logout',
    component: LogoutComponent
  },

  {
    "path": 'customer/data',
    component: CustomerOverviewComponent
  },

  {
    "path": 'admin/updateCustomers',
    component: UpdateCustomersComponent
  },

  {
    "path": '',
    redirectTo: 'customer/login',
    "pathMatch": 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
