import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PrincipalNavService } from 'src/app/services/principal-nav.service';

@Component({
  selector: 'app-principal-nav',
  templateUrl: './principal-nav.component.html',
  styleUrls: ['./principal-nav.component.css']
})
export class PrincipalNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public activeNav = false;

  constructor(private breakpointObserver: BreakpointObserver,
              private principalNavService: PrincipalNavService) {}

  ngOnInit() {
    this.principalNavService.activeNav$.subscribe(show => {
      this.activeNav = show;
    });
  }
}
