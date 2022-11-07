import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'sign',
    loadChildren: () =>
      import('./user-sign-verify-forgot/user-sign-verify-forgot.module').then(
        (m) => m.UserSignVerifyForgotModule
      ),
  },
  {
    path: 'calculation',
    loadChildren: () => import('./economic-model-calculation/economic-model-calculation.module').then((m) => m.EconomicModelCalculationModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'overview',
    loadChildren: () => import('./energy-financial-overview/energy-financial-overview.module').then((m) => m.EnergyFinancialOverviewModule),
    canActivate: [AuthGuard],
  },
  { path: 'sign-in', component: SignInComponent },
  //{ path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  //{ path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
