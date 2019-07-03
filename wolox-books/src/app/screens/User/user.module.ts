import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginModule } from './screens/Login/login.module';
import { RegisterModule } from './screens/Sign-up/sign-up.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RegisterModule,
    LoginModule,
    HttpClientModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
