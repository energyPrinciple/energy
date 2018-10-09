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
  selector: 'app-things-edit',
  templateUrl: './things-edit.component.html',
  styleUrls: ['./things-edit.component.css']
})
export class ThingsEditComponent implements OnInit {

  public thingData: any;
  key;
  thingItem : AngularFireObject<any>;
  values: any = {link: "", title: "", description: ""};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public db: AngularFireDatabase,
    private tostr: ToastrService
  ) { }

  ngOnInit() {
    this.thingData = {
        link: this.route.snapshot.params['key'],
    };

    this.route.params
    .subscribe(
        (params: Params) => {
            this.thingData.key = params['key'];
        }
    );

    this.getThingkey(this.thingData.key);
  }

  getThingkey(keyParam) {
      console.log(keyParam);
      // this.link$.next('how-tired-are-you-of-hearing-the-following-phrases');
      // console.log(this.items$);
      // this.link = 'how-tired-are-you-of-hearing-the-following-phrases';
      this.thingItem = this.db.object('/things/' + keyParam);
      this.thingItem.snapshotChanges().subscribe(action => {
        console.log(action.key)
        console.log(action.payload.val());
        this.values = action.payload.val();
      });
  }

  updateThing(keyParam) {
      this.db.object('/things/' + keyParam)
        .update({ title: this.values.title, description: this.values.description, link: this.values.link });
          this.tostr.success('Blog Succcessfully Updated');
          this.router.navigate(['/admin/thing-list/']);
  }
}
