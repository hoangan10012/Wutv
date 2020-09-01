import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIModule } from './ui/ui.module';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire'
import{AngularFireAuthModule} from '@angular/fire/auth'

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavService } from './ui/service/sidenav.service';
import {environment} from 'src/environments/environment'
import { DropzoneDirective } from './directive/dropzone.directive';


import{UploadModule} from './upload/upload.module'
import{UploadComponent} from './upload/upload.component'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    DropzoneDirective,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSidenavModule,
    UIModule,
    HomeModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    UploadModule,

    HttpClientModule,
    
    AngularFireAuthModule,


  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
