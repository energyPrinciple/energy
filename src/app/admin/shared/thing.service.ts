import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Thing } from './thing.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ThingService {
  thingList: AngularFireList<any>;
  selectedThing: Thing = new Thing();
  constructor(
    private firebase: AngularFireDatabase,
    private tostr: ToastrService
  ) { }

  getData(){
    this.thingList = this.firebase.list('things');
    return this.thingList;
  }

  deleteThing(keyParam) {
      this.firebase.object('/things/' + keyParam).remove();
      this.tostr.success('Things to See and Do Succcessfully Deleted');
  }

}
