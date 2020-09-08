import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { BoxChatService } from 'src/app/ui/service/comments/box-chat.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() data;
  constructor(private router: Router, public boxChatService: BoxChatService) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  onSelect (data){
    // this.boxChatService.vid = data.id;
    this.router.navigate(['/watch', data.id]);
  }

}
