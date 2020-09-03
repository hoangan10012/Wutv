import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  id;
  
  constructor( private route : ActivatedRoute ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
