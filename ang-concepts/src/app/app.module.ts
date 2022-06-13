import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { InOutComponent } from './base/in-out/in-out.component';
import { GetnameComponent } from './base/in-out/input/getname/getname.component';
import { NameComponent } from './base/in-out/input/name/name.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderModule } from './shared/header/header.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './base/in-out/output/product/product.component';
import { ProductdetailsComponent } from './base/in-out/output/productdetails/productdetails.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './base/in-out/output/login/login.component';
import { LoginDetailsComponent } from './base/in-out/output/login-details/login-details.component';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    InOutComponent,
    GetnameComponent,
    NameComponent,
    ProductComponent,
    ProductdetailsComponent,
    TestComponent,
    LoginComponent,
    LoginDetailsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HeaderModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
