import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchVideoRoutingModule } from './watch-video-routing.module';
import { WatchVideoComponent } from './watch-video.component';
import { WatchComponent } from './watch/watch.component';
import { WatchDetailsComponent } from './watch-details/watch-details.component';


@NgModule({
  declarations: [WatchVideoComponent, WatchComponent, WatchDetailsComponent],
  imports: [
    CommonModule,
    WatchVideoRoutingModule
  ]
})
export class WatchVideoModule { }
