import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadRoutingModule } from './upload-routing.module';


import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UpthumbnailComponent } from './upthumbnail/upthumbnail.component';
import { UpthumbnailTaskComponent } from './upthumbnail-task/upthumbnail-task.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [UploaderComponent, UploadTaskComponent, UpthumbnailComponent, UpthumbnailTaskComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ], 
  exports: [
    UploaderComponent, 
    UploadTaskComponent,
    UpthumbnailComponent,
    UpthumbnailTaskComponent
  ],
  
})
export class UploadModule { }
