import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MaterialModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';

import { LoginService } from './services/login.service';
import { AddProductService } from './services/add-product.service';
import { UploadImageService } from './services/upload-image.service';
import { GetProductListService } from './services/get-product-list.service';
import { GetProductService } from './services/get-product.service';
import { EditProductService } from './services/edit-product.service';
import { RemoveProductService } from './services/remove-product.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { ProductListComponent,DialogResultExampleDialog } from './components/product-list/product-list.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewProductComponent,
    ProductListComponent,
    ViewProductComponent,
    EditProductComponent,
    DialogResultExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule,
    NgbModule.forRoot()
  ],
  providers: [
    LoginService,
    AddProductService,
    UploadImageService,
    GetProductListService,
    GetProductService,
    RemoveProductService,
    EditProductService

  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [DialogResultExampleDialog]
})
export class AppModule { }
