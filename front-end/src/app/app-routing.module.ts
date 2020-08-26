import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'Home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'Watch-video', loadChildren: () => import('./watch-video/watch-video.module').then(m => m.WatchVideoModule) }, { path: 'Upload', loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
