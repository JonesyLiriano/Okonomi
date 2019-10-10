import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    LayoutModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    FooterComponent,
    ToastrModule,
    NgxSpinnerModule]
})
export class SharedModule { }
