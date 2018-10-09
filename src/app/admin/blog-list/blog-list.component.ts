import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable }                   from 'rxjs/Observable';
//import { Post }                         from '../models/post.model';
//import { FirebaseListObservable }       from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList }   from 'angularfire2/database';
//import { BlogthingsService }            from '../blogthings.service';
import { BlogService } from '../shared/blog.service';
import { Blog } from '../shared/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: [BlogService]
})
export class BlogListComponent implements OnInit {
  blogList: Blog[];
  constructor(
      private blogService: BlogService
  ) { }

  ngOnInit() {
    var x = this.blogService.getData();
     x.snapshotChanges().subscribe(item => {
     this.blogList = [];
     item.forEach(element => {
       var y = element.payload.toJSON();
       y["$key"] = element.key;
       this.blogList.push(y as Blog);
     });
   });

  }
  deleteBlog(keyparam) {
    this.blogService.deleteBlog(keyparam);
  }

}
