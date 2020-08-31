import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchComponent } from './watch-video/watch/watch.component';
import { WatchDetailsComponent } from './watch-video/watch-details/watch-details.component';
import { HomeComponent} from './home/home.component'
const routes: Routes = [{ path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'Home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'Watch-video', loadChildren: () => import('./watch-video/watch-video.module').then(m => m.WatchVideoModule) }
, { path: 'Upload', loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule) },
{path:"watch",component:WatchComponent},
{path:"home",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
