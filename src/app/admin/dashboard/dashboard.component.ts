import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  testimonialsCount;
  blogsCount;
  thingsCount;

  constructor(
      private db: AngularFireDatabase
  ) { }

  ngOnInit() {

   this.testimonialsCount = this.db.list('testimonial').valueChanges();
   this.blogsCount = this.db.list('blog').valueChanges();
   this.thingsCount = this.db.list('things').valueChanges();

  }

}
