import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from './screens/Login/login.component';
import { SignUpComponent } from './screens/Sign-up/sign-up.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: '',
      pathMatch: 'prefix',
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
export class UserRoutingModule { }
