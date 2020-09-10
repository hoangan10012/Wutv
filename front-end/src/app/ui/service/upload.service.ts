import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { AuthenticationService } from 'src/app/ui/service/auth.service';
import { FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  tittleFromControl = new FormControl("");
  descFromControl = new FormControl ("");
  file : File;
  fileThumnail: File;
  task: AngularFireUploadTask;
  taskThumnail: AngularFireUploadTask;
  vid: string;
  thumbid: string;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  percentageThumnail: Observable<number>;
  snapshotThumnail: Observable<any>;
  vidURL: string;
  thumbURL: string;
  constructor(private storage: AngularFireStorage,
    private db: AngularFirestore,
    private auth: AuthenticationService,
    private httpClient: HttpClient) { }
  UploadVid() {
    console.log("run button upload");
    // The storage path
    const path = `test/${Date.now()}_${this.file.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
    // The main task
    this.task = this.storage.upload(path, this.file);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    // this.task.percentageChanges().subscribe(async value=> {
    //   if (value == 100) {
    //     this.vidURL = await ref.getDownloadURL().toPromise();
    //     console.log(this.vidURL);

    //   }
    // })
    this.task.snapshotChanges().toPromise().then(async () => {
      this.vidURL = await ref.getDownloadURL().toPromise();
      console.log(this.vidURL);
      await this.httpClient.post(environment.endpoint + "/v1/video", {
        uid: this.auth.user.uid,
        thumbnailURL: this.thumbURL,
        downloadURL: this.vidURL,
        commentId: [],
        likes: [],
        dislikes: [],
        views: 0,
        tittle: this.tittleFromControl.value,
        desc: this.descFromControl.value
      }).toPromise().then(value => {
        console.log(value)
      })
    })
    // this.snapshot = this.task.snapshotChanges().pipe(
    //   tap(console.log),
    //   // The file's download URL
    //   finalize(async () => {
    //     console.log("run finalized");

    //     // this.db.collection('videos').add({ downloadURL: this.downloadURL, path });
    //     await this.httpClient.post(environment.endpoint + "/v1/video", { id: this.auth.user.uid, content: { downloadURL: this.vidURL, path }, vid: this.vid }).toPromise().then(
    //       (data) => { // uploadthumbnail
    //       }
    //     );
    //   }),
    // );
    //The storage path
    const pathThumnail = `test/${Date.now()}_${this.fileThumnail.name}`;
    // Reference to storage bucket
    const refThumbnail = this.storage.ref(pathThumnail);
    // The main task
    this.taskThumnail = this.storage.upload(pathThumnail, this.fileThumnail);
    // Progress monitoring
    this.percentageThumnail = this.taskThumnail.percentageChanges();
    this.taskThumnail.percentageChanges().subscribe(async value => {
      if (value == 100) {
        this.thumbURL = await refThumbnail.getDownloadURL().toPromise();
        console.log(this.thumbURL);
      }
    })
    // this.snapshotThumnail = this.taskThumnail.snapshotChanges().pipe(
    //   tap(console.log),
    //   // The file's download URL
    //   finalize(async () => {
    //     this.thumbURL = await refThumbnail.getDownloadURL().toPromise();
    //     console.log(this.thumbURL);
    //     // this.db.collection('videos').add({ downloadURL: this.downloadURL, path });
    //     await this.httpClient.post(environment.endpoint + "/v1/thumbnail", {
    //       content: { thumbnail: this.thumbURL, path }, thumbid: this.thumbid,
    //     }).toPromise();
    //   }),
    // );


  }

  // tslint:disable-next-line:typedef
}
