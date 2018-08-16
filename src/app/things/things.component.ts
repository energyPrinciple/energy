import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable }                   from 'rxjs/Observable';
//import { Post }                         from '../models/post.model';
//import { FirebaseListObservable }       from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList }   from 'angularfire2/database';

//import { BlogthingsService }            from '../blogthings.service';
import { Projects }                     from '../models/projects.model';
@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent implements OnInit {


  items: Observable<any[]>;
  imageSkewInt: number = 0;
  constructor(
    //private blogthingsService: BlogthingsService,
    private db: AngularFireDatabase
  ) {

  }



  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  colorPicker() {

        var int = this.getRandomInt(4);

        if(int == 0){
          return {
            'blue' : true
          };
        }
        else if(int == 1){
          return {
            'green' : true
          };
        }
        else if(int == 2){
          return {
            'purple' : true
          };
        }
        else {
          return {
            'orange' : true
          };
        }

  }

  imageSkew() {

    this.imageSkewInt = this.getRandomInt(2);
    if(this.imageSkewInt == 0){
      return {
        'skew-left' : true
      };
    } else {
      return {
        'skew-right' : true
      };
    }


  }
  checkImageSkew() {
    if(this.imageSkewInt == 0) {
      return {
        'blog-things-image-left' : true
      };
    } else {
      return {
        'blog-things-image-right' : true
      };
    }

  }


  ngOnInit() {
    this.items = this.db.list('things').valueChanges();
    //this.projects = this.blogthingsService.getBlogs();
    //this will get all posts for the home page
    //needs to be adjusted to get only a thumbnail of the recent posts
    //this will be in order from latest - earliest
    //this.subjects = this.admin.getAllPosts();
  }

  ngOnChanges() {
    this.items = this.db.list('things').valueChanges();
    //this.subjects = this.admin.getAllPosts();
    //this.projects = this.blogthingsService.getBlogs();
  }


}
