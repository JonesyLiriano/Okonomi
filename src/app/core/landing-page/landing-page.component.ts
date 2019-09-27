import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, Validators } from '@angular/forms';
import { phoneNumberValidator} from '../../shared/validators/phone-validator';

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
      message: ['' , Validators.required]
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

  constructor(private breakpointObserver: BreakpointObserver, private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  scrollToElement($target): void {
    $target.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  onClickSubmit() {

  }
}
