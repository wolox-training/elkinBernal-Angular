import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { BookListModule } from './screens/book-list/book-list.module';
import { AuthRoutingModule } from './auth-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    BookListModule,
    AuthRoutingModule,
  ],
  exports: [AuthComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }]
})
export class AuthModule { }
