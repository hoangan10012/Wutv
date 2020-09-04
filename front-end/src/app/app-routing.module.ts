import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchComponent } from './watch-video/watch/watch.component';
import { HomeComponent} from './home/home.component'
import { UploaderComponent } from './upload/uploader/uploader.component';
import{UploadTaskComponent} from './upload/upload-task/upload-task.component';
import {AuthGuard} from './guards/auth.guard';
import {UpthumbnailComponent}from './upload/upthumbnail/upthumbnail.component';
import {UpthumbnailTaskComponent}from './upload/upthumbnail-task/upthumbnail-task.component'
import {UploadComponent} from '../app/upload/upload.component'

const routes: Routes = [{ path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'Watch-video', loadChildren: () => import('./watch-video/watch-video.module').then(m => m.WatchVideoModule) }
,{path: 'upload', component: UploadComponent, children: [
    {path: 'uploader', component: UploaderComponent},
    {path: 'uploadtask', component:UploadTaskComponent},
    {path: 'upthumbnail', component: UpthumbnailComponent},
    {path: 'upthumbnailtask', component:UpthumbnailTaskComponent}
  ]},
// { path: 'watch', loadChildren: () => import('./watch-video/watch-video.module').then(m => m.WatchVideoModule) },
{path:"watch/:id",component:WatchComponent, canActivate: [AuthGuard]},
// {path:"home",component:HomeComponent},
{path: "**", redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// {path: 'upload', component: UploaderComponent, children: [
//   {path: 'uploader', component: UploaderComponent},
//   {path: 'uploadtask', component:UploadTaskComponent},
//   {path: 'upthumbnail', component: UpthumbnailComponent},
//   {path: 'upthumbnailtask', component:UpthumbnailTaskComponent}
// ]},