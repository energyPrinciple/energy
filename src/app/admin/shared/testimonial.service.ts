import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Testimonial} from './testimonial.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TestimonalService {
  testimonialList: AngularFireList<any>;
  selectedTestimonial: Testimonial = new Testimonial();
  constructor(
    private firebase :AngularFireDatabase,
    private tostr: ToastrService
  ) { }

  getData(){
    this.testimonialList = this.firebase.list('testimonial');
    return this.testimonialList;
  }

  deleteTestimonial(keyParam) {
      this.firebase.object('/testimonial/' + keyParam).remove();
      this.tostr.success('Testimonial Succcessfully Deleted');
  }

}
