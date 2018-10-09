import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AngularFireDatabase, AngularFireAction, AngularFireList, AngularFireObject }   from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { Blog} from '../shared/blog.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public blogData: any;
  key;
  blogItem : AngularFireObject<any>;
  values: any = {link: "", title: "", description: ""};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public db: AngularFireDatabase,
    private tostr: ToastrService
  ) { }

  ngOnInit() {

            this.blogData = {
                link: this.route.snapshot.params['key'],
            };

            this.route.params
            .subscribe(
                (params: Params) => {
                    this.blogData.key = params['key'];
                }
            );

            this.getBlogkey(this.blogData.key);

    }

    getBlogkey(keyParam) {
        console.log(keyParam);
        // this.link$.next('how-tired-are-you-of-hearing-the-following-phrases');
        // console.log(this.items$);
        // this.link = 'how-tired-are-you-of-hearing-the-following-phrases';
        this.blogItem = this.db.object('/blog/' + keyParam);
        this.blogItem.snapshotChanges().subscribe(action => {
          console.log(action.key)
          console.log(action.payload.val());
          this.values = action.payload.val();
        });
    }
    updateBlog(keyParam) {
        this.db.object('/blog/' + keyParam)
          .update({ title: this.values.title, description: this.values.description, link: this.values.link });
            this.tostr.success('Blog Succcessfully Updated');
            this.router.navigate(['/admin/blog-list/']);
    }

}
