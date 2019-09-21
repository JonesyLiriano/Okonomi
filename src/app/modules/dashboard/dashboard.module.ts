import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }

];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  SharedModule],
    exports: [RouterModule]
})
export class DashboardModule { }
