import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { animateText, onSideNavChange  } from '../animations/animation'
import { SidenavService } from '../service/sidenav.service'
import { TypeofExpr } from '@angular/compiler';
import { of, interval, forkJoin } from 'rxjs';



interface Page {
  link: string;
  name: string;
  icon: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [ onSideNavChange, animateText ]
})
export class SidebarComponent implements OnInit {

  public sideNavState:boolean = true;
  public linkText: boolean = true;

  public pages: Page[] = [
    {name: 'Inbox', link:'some-link', icon: 'inbox'},
    {name: 'Starred', link:'some-link', icon: 'star'},
    {name: 'Send email', link:'some-link', icon: 'send'},
  ]

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe((state)=>{
      console.log("call")
      this.sideNavState = state
    })
  }

  ngOnInit(): void {
  }

  onSinenavToggle() {
    // this.sideNavState = !this.sideNavState
    
    // setTimeout(() => {
    //   this.linkText = this.sideNavState;
    // }, 200);
    // this._sidenavService.sideNavState$.next(this.sideNavState)
  }

  
}
