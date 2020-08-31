import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../service/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // public sideNavState: boolean = false;
  showFiller = false;
  constructor(
    private _sidenavService: SidenavService
  ) { }
  @Input() sidenav: MatSidenav;
  ngOnInit(): void {
  }
  inputBackgroundFlip={
    'background':'white'
  }

  changeInputColor(color:string){
    console.log("dasdasd")
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
