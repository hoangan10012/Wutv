import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadRoutingModule } from './upload-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UpthumbnailComponent } from './upthumbnail/upthumbnail.component';
import { UpthumbnailTaskComponent } from './upthumbnail-task/upthumbnail-task.component';
import {MatIconModule} from '@angular/material/icon';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [UploaderComponent, UploadTaskComponent, UpthumbnailComponent, UpthumbnailTaskComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
    
  ], 
  exports: [
    UploaderComponent, 
    UploadTaskComponent,
    UpthumbnailComponent,
    UpthumbnailTaskComponent
  ],
  
})
export class UploadModule { }
