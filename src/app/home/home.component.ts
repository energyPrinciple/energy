import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.home-links-keynotes').click(function(){
      $('html, body').animate({
    scrollTop: $(".services-left-two").offset().top
        }, 1000)
    });

    $('.home-links-programs').click(function(){
      $('html, body').animate({
    scrollTop: $(".services").offset().top
        }, 1000)
    });

    $('.home-links-coaching').click(function(){
      $('html, body').animate({
    scrollTop: $(".services-left-three").offset().top
        }, 1000)
    });
  }

}
