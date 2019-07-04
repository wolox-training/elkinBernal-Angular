import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './screens/book-list/book-list.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [{
  path: 'books',
  component: AuthComponent,
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
