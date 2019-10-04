import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { phoneNumberValidator } from '../../shared/validators/phone-validator';
import { HttpRequestsService } from '../../services/http-requests.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, phoneNumberValidator]],
    message: ['', Validators.required]
  });
  get name() {
    return this.contactForm.get('name');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get email() {
    return this.contactForm.get('email');
  }

  constructor(private breakpointObserver: BreakpointObserver, private fb: FormBuilder,
              private httpRequestsService: HttpRequestsService, private toastr: ToastrService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  scrollToElement($target): void {
    $target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  scrollToTop() {
    document.querySelector('mat-sidenav-content').scrollTop = 0;
  }
  onClickSubmit(formDirective: FormGroupDirective) {
    if (this.contactForm.valid) {
      this.spinner.show();
      this.httpRequestsService.post('https://us-central1-okonomi-bfa7f.cloudfunctions.net/contactEmail',
        this.contactForm.value).subscribe((res) => {
          if (res.message === 'success') {
            this.toastr.success('En breve nuestros representantes se estaran contactando con usted.', 'Solicitud Enviada!', {
              timeOut: 3000,
              positionClass: 'toast-top-right'
            });
          } else {
            this.toastr.error('Favor intente de nuevo', 'Ha ocurrido un error.', {
              timeOut: 3000,
              positionClass: 'toast-top-right'
            });
          }
          formDirective.resetForm();
          this.contactForm.reset();
          this.spinner.hide();
        }, (err) => {
          console.log(err);
          this.toastr.error('Su solicitud no ha podido ser enviada.', 'Ha ocurrido un error', {
            timeOut: 3000,
            positionClass: 'toast-top-right'
          });
          formDirective.resetForm();
          this.contactForm.reset();
          this.spinner.hide();
        });
    } else {
      this.toastr.warning('Verifique los campos nuevamente.', 'Favor intente de nuevo', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
      });
    }
  }
}
