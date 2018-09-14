import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AngularFireDatabase, AngularFireAction, AngularFireList, AngularFireObject }   from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public postData: any;
  blogPost;
  link;
  // item: Observable<any[]>;
  constructor(
            private route: ActivatedRoute,
            private router: Router,
            public db: AngularFireDatabase
  ) {
  }

  ngOnInit() {

    this.postData = {
        link: this.route.snapshot.params['link'],
    };

    this.route.params
    .subscribe(
        (params: Params) => {
            this.postData.link = params['link'];
        }
    );

    this.getPostLink(this.postData.link);
  }

  getPostLink(linkParam) {
    // this.link$.next('how-tired-are-you-of-hearing-the-following-phrases');
    // console.log(this.items$);
    // this.link = 'how-tired-are-you-of-hearing-the-following-phrases';
    this.blogPost = this.db.list('/blog', ref => ref.orderByChild("link").equalTo(linkParam)).valueChanges();
  }
      // const userId$ = new Subject<string>();
      // const userQuery$ = this.db.list('/blog', {query: {
      //         equalTo: userId$
      //     }}
      //   );
      //   userQuery$.subscribe(blog => console.log(blog));
      //   userId$.next('how-tired-are-you-of-hearing-the-following-phrases');

      // }
    // }
}
