import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable }                   from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList }   from 'angularfire2/database';
import { Pipe, PipeTransform } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4000, noPause: true, showIndicators: false} }
  ],
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit{


  items: Observable<any[]>;

  activeSlideIndex = 0;
  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.items = this.db.list('testimonial').valueChanges();





  }

  ngOnChanges() {
    this.items = this.db.list('testimonial').valueChanges();



  }



}
