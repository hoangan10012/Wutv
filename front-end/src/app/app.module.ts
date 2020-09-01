import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIModule } from './ui/ui.module';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire'
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavService } from './ui/service/sidenav.service';
import { environment } from 'src/environments/environment';
import {AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    
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
<<<<<<< HEAD
    AngularFireModule.initializeApp(environment.firebase)


=======
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
   
>>>>>>> be39ac57604ce56387cde99dc95526e8c6b7b534
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
