import { Component, OnInit } from '@angular/core';
import { PrincipalNavService } from 'src/app/services/principal-nav.service';
import { Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public activeNav = true;
  loginForm = this.fb.group({
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],

  });
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  constructor(private principalNavService: PrincipalNavService,
              private fb: FormBuilder, private toastr: ToastrService,
              private spinner: NgxSpinnerService, ) { }

  ngOnInit() {
    this.principalNavService.activeNav$.subscribe(show => {
      this.activeNav = show;
    });
  }
  onClickSubmit(formDirective: FormGroupDirective) {
    if (this.loginForm.valid) {
      this.spinner.show();
      formDirective.resetForm();
      this.loginForm.reset();
      this.spinner.hide();

    } else {
      this.toastr.warning('Verifique los campos nuevamente.', 'Favor intente de nuevo', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
      });
    }
  }
  }
