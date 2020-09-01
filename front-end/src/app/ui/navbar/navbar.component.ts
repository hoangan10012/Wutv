import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../service/sidenav.service';
import {AuthenticationService} from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // public sideNavState: boolean = false;
  showFiller = false;
  constructor(
    private _sidenavService: SidenavService,
    public auth:AuthenticationService,
    public router : Router
  ) { }
  @Input() sidenav: MatSidenav;
  ngOnInit(): void {
  }
  inputBackgroundFlip={
    'background':'#dfe49b'
  }

  changeInputColor(color:string){
    
    this.inputBackgroundFlip = {
      'background':color
    }
  }

  toggleNavBar(){
    this._sidenavService.sideNavState = !this._sidenavService.sideNavState
    this._sidenavService.sideNavState$.next(this._sidenavService.sideNavState)
  }

  // onSinenavToggle() {
  //   this.sideNavState = !this.sideNavState
  // }
}
