import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable }                   from 'rxjs/Observable';
//import { Post }                         from '../models/post.model';
//import { FirebaseListObservable }       from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList }   from 'angularfire2/database';
//import { BlogthingsService }            from '../blogthings.service';
import { TestimonalService } from '../shared/testimonial.service';
import { Testimonial } from '../shared/testimonial.model';

@Component({
  selector: 'app-testimonal-list',
  templateUrl: './testimonal-list.component.html',
  styleUrls: ['./testimonal-list.component.css'],
  providers :[TestimonalService]
})
export class TestimonalListComponent implements OnInit {
  testimonialList: Testimonial[];
  constructor(
        private testimonalService: TestimonalService
  ) { }

  ngOnInit() {
    var x = this.testimonalService.getData();
     x.snapshotChanges().subscribe(item => {
     this.testimonialList = [];
     item.forEach(element => {
       var y = element.payload.toJSON();
       y["$key"] = element.key;
       this.testimonialList.push(y as Testimonial);
     });
   });
  //   this.items = this.db.list('blog', {
  //    query: {
  //     orderByChild: "order",
  //    }
  //   }
  // ).valueChanges();
    // this.items = this.db.list('testimonial').valueChanges();
    //     console.log(this.items);
    //this.projects = this.blogthingsService.getBlogs();
    //this will get all posts for the home page
    //needs to be adjusted to get only a thumbnail of the recent posts
    //this will be in order from latest - earliest
    //this.subjects = this.admin.getAllPosts();
  }
  deleteTestimonial(keyparam) {
    this.testimonalService.deleteTestimonial(keyparam);
  }
  ngOnChanges() {
    // this.items = this.db.list('testimonial').valueChanges();
    //this.subjects = this.admin.getAllPosts();
    //this.projects = this.blogthingsService.getBlogs();
  }
}
