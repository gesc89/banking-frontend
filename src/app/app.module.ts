import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountOverviewComponent } from './components/account-overview/account-overview.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { LoginComponent } from './login/login.component';
import { TransferComponent } from './components/choose-account/transfer/transfer.component';
import { ChooseAccountComponent } from './components/choose-account/choose-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatNativeDateModule, MatListModule, MatFormFieldModule } from '@angular/material';
import { BalanceFormatPipe } from './pipes/balance-format.pipe';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CustomerOverviewComponent } from './components/customer-overview/customer-overview.component';
import { UpdateCustomersComponent } from './components/update-customers/update-customers.component';
import { SelfUpdateComponent } from './components/self-update/self-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountOverviewComponent,
    AddAccountComponent,
    AddCustomerComponent,
    LoginComponent,
    TransferComponent,
    ChooseAccountComponent,
    BalanceFormatPipe,
    SidenavComponent,
    LogoutComponent,
    CustomerOverviewComponent,
    UpdateCustomersComponent,
    SelfUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatListModule,
    MatFormFieldModule

  ],

  exports: [CommonModule,
            MatButtonModule,
            MatToolbarModule,
            MatNativeDateModule,
            MatIconModule,
            MatSidenavModule,
            MatListModule
          
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
