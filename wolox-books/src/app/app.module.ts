import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LocalStorageService } from './services/local-storage.service';
import { UnauthModule } from './screens/unauth/unauth.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './screens/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UnauthModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
