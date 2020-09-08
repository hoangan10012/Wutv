import { Component, OnInit,Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import { AuthenticationService } from 'src/app/ui/service/auth.service';
import {UploadService} from '../../ui/service/upload.service'
@Component({
  selector: 'app-upthumbnail-task',
  templateUrl: './upthumbnail-task.component.html',
  styleUrls: ['./upthumbnail-task.component.scss']
})
export class UpthumbnailTaskComponent implements OnInit {
  @Input() file: File;

  task: AngularFireUploadTask;
  vid:string;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  constructor(private storage: AngularFireStorage,
    private db: AngularFirestore,
    private auth: AuthenticationService,
    private httpClient:HttpClient,
    public upload :UploadService) { }

  ngOnInit()  {}
  // tslint:disable-next-line:typedef
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
