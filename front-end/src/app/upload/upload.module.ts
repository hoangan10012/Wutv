import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadRoutingModule } from './upload-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UpthumbnailComponent } from './upthumbnail/upthumbnail.component';
import { UpthumbnailTaskComponent } from './upthumbnail-task/upthumbnail-task.component';


@NgModule({
  declarations: [UploaderComponent, UploadTaskComponent, UpthumbnailComponent, UpthumbnailTaskComponent],
  imports: [
    CommonModule,
    UploadRoutingModule
  ], 
  exports: [
    UploaderComponent, UploadTaskComponent,
    MatIconModule,
    MatButtonModule,UpthumbnailComponent,UpthumbnailTaskComponent
  ],
  
})
export class UploadModule { }
