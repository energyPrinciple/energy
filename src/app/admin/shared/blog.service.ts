import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Blog } from './blog.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class BlogService {
  blogList: AngularFireList<any>;
  selectedBlog: Blog = new Blog();
  constructor(
    private firebase: AngularFireDatabase,
    private tostr: ToastrService
  ) { }

  getData(){
    this.blogList = this.firebase.list('blog');
    return this.blogList;
  }

  deleteBlog(keyParam) {
      this.firebase.object('/blog/' + keyParam).remove();
      this.tostr.success('Blog Succcessfully Deleted');
  }

}
