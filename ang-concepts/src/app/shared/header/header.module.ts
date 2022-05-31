import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { BaseComponent } from 'src/app/base/base.component';
import { NameComponent } from 'src/app/base/in-out/input/name/name.component';




const appRoutes: Routes = [
  { path: 'inputoutput', component: NameComponent },


]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule { }


