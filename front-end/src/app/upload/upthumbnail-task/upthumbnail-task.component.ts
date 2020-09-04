import { Component, OnInit,Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import { AuthenticationService } from 'src/app/ui/service/auth.service';
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
    private httpClient:HttpClient,) { }

  ngOnInit(): void {
    this.startUpload();
  }
  startUpload() {
    // users
    // The storage path
    const path = `test/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async  () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        // this.db.collection('videos').add({ downloadURL: this.downloadURL, path });
        await this.httpClient.post(environment.endpoint+"/v1/video",{
          vid:'',
          id: this.auth.user.uid, 
          content: {thumbnail:this.downloadURL,path},
          comment:"",
          like:'',
          dislike:'',
          
        }).toPromise();
      }),
    );
  }

  // tslint:disable-next-line:typedef
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
