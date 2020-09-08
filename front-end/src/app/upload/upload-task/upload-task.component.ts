import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import { AuthenticationService } from 'src/app/ui/service/auth.service';
import {UploadService} from '../../ui/service/upload.service'

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {
  @Input() file: File;

  task: AngularFireUploadTask;
  tittle:string;
  desc:string;
  vid:string;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  constructor(private storage: AngularFireStorage,
     private db: AngularFirestore,
     private auth: AuthenticationService,
     private httpClient:HttpClient,
     public upload:UploadService
    ) { }

  
  ngOnInit() {
   
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
