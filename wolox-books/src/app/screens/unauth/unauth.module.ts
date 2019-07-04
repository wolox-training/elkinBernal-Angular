import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './unauth-routing.module';
import { UnauthComponent } from './unauth.component';
import { LoginModule } from './screens/Login/login.module';
import { RegisterModule } from './screens/Sign-up/sign-up.module';

@NgModule({
  declarations: [UnauthComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RegisterModule,
    LoginModule,
  ],
  exports: [UnauthComponent]
})
export class UnauthModule { }
