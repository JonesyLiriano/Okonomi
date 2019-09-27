import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../../shared/validators/phone-validator';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { CdkScrollable } from '@angular/cdk/overlay';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  @ViewChild(MatSidenavContainer, { static: true }) sidenavContainer: MatSidenavContainer;
  @ViewChild(CdkScrollable, { static: true }) scrollable: CdkScrollable;
  @ViewChild(MatSidenavContent, { static: true }) content: MatSidenavContent;
  @ViewChild('toolbara', { static: true }) toolbar: MatToolbar;

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

  constructor(private breakpointObserver: BreakpointObserver, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.scrollable.elementScrolled().subscribe(() => {
      const scrollTop = this.sidenavContainer.scrollable.getElementRef().nativeElement.scrollTop;
      if (scrollTop > 0) {
        this.toolbar._elementRef.nativeElement.classList.add('sticky');
        this.toolbar._elementRef.nativeElement.classList.remove('fixed');
      } else {
        this.toolbar._elementRef.nativeElement.classList.add('fixed');
        this.toolbar._elementRef.nativeElement.classList.remove('sticky');
      }
    });
  }
  scrollToElement($target): void {
    $target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  scrollToTop() {
    document.querySelector('mat-sidenav-content').scrollTop = 0;
  }
  onClickSubmit() {

  }
}
