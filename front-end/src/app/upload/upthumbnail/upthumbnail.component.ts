import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upthumbnail',
  templateUrl: './upthumbnail.component.html',
  styleUrls: ['./upthumbnail.component.scss']
})
export class UpthumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isHovering: boolean;

  files: Array<File> = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

}
