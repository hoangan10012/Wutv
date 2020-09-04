import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import { AuthenticationService } from 'src/app/ui/service/auth.service';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {
  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  constructor(private storage: AngularFireStorage,
     private db: AngularFirestore,
     private auth: AuthenticationService,
     private httpClient:HttpClient,
    ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.startUpload();
  }

  // tslint:disable-next-line:typedef
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
<<<<<<< HEAD

=======
>>>>>>> 663474d50d279751c21eefeca1607e446708ebcc
        // this.db.collection('videos').add({ downloadURL: this.downloadURL, path });
        await this.httpClient.post(environment.endpoint+"/v1/video",{id: this.auth.user.uid ,content: {downloadURL:this.downloadURL,path}}).toPromise();
      }),
    );
  }

  // tslint:disable-next-line:typedef
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
