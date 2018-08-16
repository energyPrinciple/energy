import { Injectable }           from '@angular/core';
import { Router }               from '@angular/router';
import { AngularFireAuth }      from 'angularfire2/auth';
import { AngularFireDatabase }  from 'angularfire2/database';
import * as firebase            from 'firebase/app';
import { Observable }           from 'rxjs/Observable';
import { User }                 from './models/user.model';
@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private authState: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
      this.user = afAuth.authState;
  }


  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  authUser() {
    console.log("auth user data" + this.user);
    return this.user;
  }


  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(resolve => {
        console.log('logged in');
        this.router.navigate(['admin']);
      });
  }

   setUserStatus(status: string): void {
     const path = `users/${this.currentUserId}`;
     const data = {
       status: status
     }
   }

  setUserData(email: string, displayName: string, status: string): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      email: email,
      displayName: displayName,
      status: status
    };
    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['home']);
  }

}
