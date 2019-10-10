import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrerUserComponent } from './components/registrer-user/registrer-user.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrer',
    component: RegistrerUserComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
  { path: '', pathMatch: 'full', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
