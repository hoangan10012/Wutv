import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() data;
  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  onSelect (data){
    this.router.navigate(['/watch', data.id]);
  }

}
