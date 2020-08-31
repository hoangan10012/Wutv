import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public sideNavState: boolean = false;

  public sideNavState$: BehaviorSubject<boolean> =  new BehaviorSubject<boolean>(false);

  constructor() { 
    
  }
}
