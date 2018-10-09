import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AngularFireDatabase, AngularFireAction, AngularFireList, AngularFireObject }   from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { Testimonial} from '../shared/testimonial.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-testimonial-edit',
  templateUrl: './testimonial-edit.component.html',
  styleUrls: ['./testimonial-edit.component.css']
})
export class TestimonialEditComponent implements OnInit {

  public testimonialData: any;
  key;
  testimonialItem : AngularFireObject<any>;
  values: any = {name: "", testimonial: ""};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public db: AngularFireDatabase,
    private tostr: ToastrService
  ) { }

  ngOnInit() {

        this.testimonialData = {
            link: this.route.snapshot.params['key'],
        };

        this.route.params
        .subscribe(
            (params: Params) => {
                this.testimonialData.key = params['key'];
            }
        );

        this.getTestimonialkey(this.testimonialData.key);
  }
  getTestimonialkey(keyParam) {
    console.log(keyParam);
    // this.link$.next('how-tired-are-you-of-hearing-the-following-phrases');
    // console.log(this.items$);
    // this.link = 'how-tired-are-you-of-hearing-the-following-phrases';
    this.testimonialItem = this.db.object('/testimonial/' + keyParam);
    this.testimonialItem.snapshotChanges().subscribe(action => {
      console.log(action.key)
      console.log(action.payload.val());
      this.values = action.payload.val();
    });
  }
  updateTestimonial(keyParam) {
      this.db.object('/testimonial/' + keyParam)
        .update({ name: this.values.name, testimonial: this.values.testimonial });
          this.tostr.success('Testimonial Succcessfully Updated');
          this.router.navigate(['/admin/testimonial-list/']);
  }
}
