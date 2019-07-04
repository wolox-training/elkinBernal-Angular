import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthComponent } from './unauth.component';
import { LoginComponent } from './screens/Login/login.component';
import { SignUpComponent } from './screens/Sign-up/sign-up.component';
import { UnauthGuard } from 'src/app/guards/unauth.guard';

const routes: Routes = [{
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
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnauthRoutingModule { }
