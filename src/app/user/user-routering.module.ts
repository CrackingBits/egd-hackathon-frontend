import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { UserListComponent } from './user-list.component';

const routes: Routes = [
  { path: 'detail', component: UserDetailComponent },
  { path: 'list', component: UserListComponent },
  { path: '**', redirectTo: 'detail' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRouteringModule { }
