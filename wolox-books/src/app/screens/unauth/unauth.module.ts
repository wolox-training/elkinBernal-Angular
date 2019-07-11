import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './screens/Login/login.module';
import { RegisterModule } from './screens/Sign-up/sign-up.module';
import { HttpClientModule } from '@angular/common/http';
import { UnauthComponent } from './unauth.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [UnauthComponent],
  imports: [
    CommonModule,
    RegisterModule,
    LoginModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [UnauthComponent]
})
export class UnauthModule { }
