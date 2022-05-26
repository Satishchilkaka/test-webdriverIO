import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { InOutComponent } from './base/in-out/in-out.component';
import { GetnameComponent } from './base/in-out/input/getname/getname.component';
import { NameComponent } from './base/in-out/input/name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    InOutComponent,
    GetnameComponent,
    NameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
