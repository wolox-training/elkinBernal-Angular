import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './screens/Register/register.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        redirectTo: '/sign-up',
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }