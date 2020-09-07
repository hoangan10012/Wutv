import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { data } from '../../models/data.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fb: AngularFirestore, private ht: HttpClient) { }

  public async getvideo() {
    let videos = Array<data>();
    return this.ht.get(environment.endpoint + "/v1/videos").toPromise().then((data => {
      let dataListRaw = <Array<any>>data['videos'];
      for (let i = 0; i < dataListRaw.length; i++) {
        videos.push(<data>dataListRaw[i]);
      }
      console.log (videos);
      return videos;
    }));

  }




}
