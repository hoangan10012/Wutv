import { Component, OnInit } from '@angular/core';
import { SidenavService } from './ui/service/sidenav.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  title = 'Wutv';
  public onSideNavChange: boolean;
  constructor(private _sidenavService: SidenavService,) {

  }
  ngOnInit() {
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }
}
