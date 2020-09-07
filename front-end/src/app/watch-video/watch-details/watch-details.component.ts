import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watch-details',
  templateUrl: './watch-details.component.html',
  styleUrls: ['./watch-details.component.scss']
})
export class WatchDetailsComponent implements OnInit {
  @Input() src: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.src);
  }

}
