import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalNavService {
  private activeNav: Subject<boolean> = new Subject<boolean>();

  activeNav$: Observable<boolean> = this.activeNav.asObservable();

  constructor() { }

  setActiveNav(response: boolean) {
    this.activeNav.next(response);
  }
}
