import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadRoutingModule } from './upload-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';


@NgModule({
  declarations: [UploaderComponent, UploadTaskComponent],
  imports: [
    CommonModule,
    UploadRoutingModule
  ], 
  exports: [
    UploaderComponent, UploadTaskComponent,
    MatIconModule,
    MatButtonModule
  ],
  
})
export class UploadModule { }
