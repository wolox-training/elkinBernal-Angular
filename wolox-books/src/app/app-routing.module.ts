import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './screens/Sign-up/sign-up.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
}, {
    path: 'sign-up',
    component: SignUpComponent
}, {
    path: 'login',
    component: LoginComponent
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
