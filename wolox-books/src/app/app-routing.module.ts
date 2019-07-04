import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { UnauthComponent } from './screens/unauth/unauth.component';

const routes: Routes = [{
    path: '',
    component: UnauthComponent,
}, {
    path: 'auth',
    component: AuthComponent
}]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
