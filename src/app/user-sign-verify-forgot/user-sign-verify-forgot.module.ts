import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { UserSignVerifyForgotRoutingModule } from './user-sign-verify-forgot-routing.module';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SignUpComponent,
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    UserSignVerifyForgotRoutingModule
  ]
})
export class UserSignVerifyForgotModule { }
