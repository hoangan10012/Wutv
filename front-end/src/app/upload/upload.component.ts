import { Component, OnInit } from '@angular/core';
import {UploadService} from '../ui/service/upload.service'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(public upload:UploadService) { }
 
  ngOnInit(): void {
    
  }
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
 
}
