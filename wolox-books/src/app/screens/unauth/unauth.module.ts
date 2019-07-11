import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './screens/Login/login.module';
import { RegisterModule } from './screens/Sign-up/sign-up.module';
import { HttpClientModule } from '@angular/common/http';
import { UnauthComponent } from './unauth.component';
import { UnauthRoutingModule } from './unauth-routing.module';

@NgModule({
  declarations: [UnauthComponent],
  imports: [
    CommonModule,
    UnauthRoutingModule,
    RegisterModule,
    LoginModule,
    HttpClientModule
  ],
  exports: [UnauthComponent]
})
export class UnauthModule { }
