import { Injectable } from '@angular/core';
import { Observable }           from 'rxjs/Rx';
import { AngularFireAuth }      from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList }   from 'angularfire2/database';
import { FirebaseApp }          from 'angularfire2';
import 'firebase/storage';
import { Projects }             from './models/projects.model';
import * as firebase            from 'firebase';
@Injectable()
export class BlogthingsService {

  private uid: string;
  uploads: AngularFireList<Projects[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private db:     AngularFireDatabase

  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }


  getBlogs(): AngularFireList<Projects[]>{
      return this.db.list('uploads');

  }

}
