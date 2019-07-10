import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './screens/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { UnauthGuard } from './guards/unauth.guard';
import { SignUpComponent } from './screens/unauth/screens/Sign-up/sign-up.component';
import { LoginComponent } from './screens/unauth/screens/Login/login.component';
import { BookDetailComponent } from './screens/auth/screens/book-detail/book-detail.component';

const routes: Routes = [{
    path: 'books',
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [{
        path: '',
        component: BookListComponent,
    }, {
        path: ':id',
        component: BookDetailComponent
    }]
}, {
    path: '',
    component: UnauthComponent,
    canActivate: [UnauthGuard],
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'login',
        },
        {
            path: 'sign-up',
            component: SignUpComponent
        },
        {
            path: 'login',
            component: LoginComponent
        }]
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
