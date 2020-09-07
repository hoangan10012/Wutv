import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/ui/service/upload.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  constructor(public upload:UploadService) { }

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
    };
    this.upload.file=this.files[0];
  }

 
}
