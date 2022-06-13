import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NameComponent } from 'src/app/base/in-out/input/name/name.component';
import { TestComponent } from 'src/app/test/test.component';
import { ProductComponent } from 'src/app/base/in-out/output/product/product.component';
import { ProductdetailsComponent } from 'src/app/base/in-out/output/productdetails/productdetails.component';
import { LoginComponent } from 'src/app/base/in-out/output/login/login.component';




const appRoutes: Routes = [
  { path: 'inputoutput', component: NameComponent },
  { path: 'output', component: LoginComponent },
  { path: 'test', component: TestComponent },
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


