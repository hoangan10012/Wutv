import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';


@NgModule({
  declarations: [ UploaderComponent, UploadTaskComponent],
  imports: [
    CommonModule,
    UploadRoutingModule
  ],exports:[
     UploaderComponent, UploadTaskComponent
  ]
})
export class UploadModule { }
