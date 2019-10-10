import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatGridListModule, MatListModule,
  MatStepperModule
} from '@angular/material';
@NgModule({
  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatGridListModule,
  MatListModule,
  MatStepperModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatSidenavModule,
   MatGridListModule,
   MatListModule,
   MatStepperModule
   ],
})
export class CustomMaterialModule { }
