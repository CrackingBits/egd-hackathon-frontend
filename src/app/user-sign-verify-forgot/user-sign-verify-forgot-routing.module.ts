import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  { path: 'up', component: SignUpComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'verify', component: VerifyEmailComponent },
  { path: '**', redirectTo: 'up' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSignVerifyForgotRoutingModule {}
