import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {routing} from './app.routing';
import 'hammerjs';

import {DataTableModule} from 'angular2-datatable';
import {DataFilterPipe} from './components/product-list/data-filter.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FatherDayComponent } from './components/father-day/father-day.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PlanComponent } from './components/plan/plan.component';

import {SignInService} from './services/sign-in.service';
import {UserService} from './services/user.service';
import {PaymentService} from './services/payment.service';
import {ShippingService} from './services/shipping.service';
import {ProductService} from './services/product.service';
import {CartService} from './services/cart.service';
import {OrderService} from './services/order.service';
import {CheckoutService} from './services/checkout.service';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderComponent } from './components/order/order.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    FatherDayComponent,
    ProductListComponent,
    SignInComponent,
    MyProfileComponent,
    PlanComponent,
    DataFilterPipe,
    ProductDetailComponent,
    ShoppingCartComponent,
    OrderComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    routing,
    DataTableModule
  ],
  providers: [
    SignInService,
    UserService,
    PaymentService,
    ShippingService,
    ProductService,
    CartService,
    OrderService,
    CheckoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
