import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DxDataGridModule, DxTagBoxModule } from 'devextreme-angular';
import { UserDetailComponent } from './user-detail.component';
import { UserListComponent } from './user-list.component';
import { UserRouteringModule } from './user-routering.module';

@NgModule({
  declarations: [UserDetailComponent, UserListComponent],
  imports: [
    CommonModule,
    UserRouteringModule,
    DxDataGridModule,
    DxTagBoxModule,
  ],
})
export class UserModule {}
