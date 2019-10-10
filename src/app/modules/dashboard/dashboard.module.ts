import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material.module';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomMaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
