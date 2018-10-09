import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable }                   from 'rxjs/Observable';
//import { Post }                         from '../models/post.model';
//import { FirebaseListObservable }       from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList }   from 'angularfire2/database';
//import { BlogthingsService }            from '../blogthings.service';
import { ThingService } from '../shared/thing.service';
import { Thing } from '../shared/thing.model';

@Component({
  selector: 'app-things-list',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.css'],
  providers: [ThingService]
})
export class ThingsListComponent implements OnInit {
  thingList: Thing[];
  constructor(
      private thingService: ThingService
  ) { }

  ngOnInit() {
    var x = this.thingService.getData();
     x.snapshotChanges().subscribe(item => {
     this.thingList = [];
     item.forEach(element => {
       var y = element.payload.toJSON();
       y["$key"] = element.key;
       this.thingList.push(y as Thing);
     });
   });

  }
  deleteThing(keyparam) {
    this.thingService.deleteThing(keyparam);
  }

}
