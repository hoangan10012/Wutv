import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
<<<<<<< HEAD
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
=======
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
>>>>>>> 94a374f8910fbf3b2641ecfde6b4829e7c6e7b67


@NgModule({
  declarations: [ UploaderComponent, UploadTaskComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    UploadRoutingModule
  ],exports:[
     UploaderComponent, UploadTaskComponent
=======
    UploadRoutingModule,
    MatIconModule,
    MatButtonModule
>>>>>>> 94a374f8910fbf3b2641ecfde6b4829e7c6e7b67
  ]
})
export class UploadModule { }
