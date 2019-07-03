import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './screens/User/user.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [{
    path: '',
    component: UserComponent,
}, {
    path: 'auth',
    component: AuthComponent
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
