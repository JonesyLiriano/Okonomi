import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CustomMaterialModule} from '../../shared/custom-material.module';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  }

];
@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomMaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class LandingPageModule { }
