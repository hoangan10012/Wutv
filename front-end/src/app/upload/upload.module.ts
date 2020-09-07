import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadRoutingModule } from './upload-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UpthumbnailComponent } from './upthumbnail/upthumbnail.component';
import { UpthumbnailTaskComponent } from './upthumbnail-task/upthumbnail-task.component';
import {MatIconModule} from '@angular/material/icon';
import { UploadFromComponent } from './upload-from/upload-from.component';


@NgModule({
  declarations: [UploaderComponent, UploadTaskComponent, UpthumbnailComponent, UpthumbnailTaskComponent, UploadFromComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MatIconModule,
    MatButtonModule
  ], 
  exports: [
    UploaderComponent, 
    UploadTaskComponent,
    UpthumbnailComponent,
    UpthumbnailTaskComponent
  ],
  
})
export class UploadModule { }
