import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './screens/book-list/book-list.component';
import { AuthComponent } from './auth.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [{
  path: 'books',
  component: AuthComponent,
  canActivate: [AuthGuard],
  children: [{
      path: '',
      component: BookListComponent,
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
