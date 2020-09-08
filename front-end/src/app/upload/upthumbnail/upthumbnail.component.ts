import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/ui/service/upload.service';
@Component({
  selector: 'app-upthumbnail',
  templateUrl: './upthumbnail.component.html',
  styleUrls: ['./upthumbnail.component.scss']
})
export class UpthumbnailComponent implements OnInit {

  constructor(public upload:UploadService) { }
  fileThumbnails: Array<File> = [];
  ngOnInit(): void {
  }
  isHovering: boolean;
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.fileThumbnails.push(files.item(i));
      this.upload.fileThumnail=this.fileThumbnails[0];
    }
  }

}
