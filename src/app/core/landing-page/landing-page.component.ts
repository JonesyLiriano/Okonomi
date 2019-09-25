import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }
  scrollToElement($target): void {
    $target.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
