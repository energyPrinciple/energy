import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.home-link').click(function(){
      if($(window).width() < 800 ){
        $('html, body').animate({
      scrollTop: $(".home").offset().top-75
          }, 1000)
      }else {
        $('html, body').animate({
      scrollTop: $(".home").offset().top
          }, 1000)
      }

    });

    $('.about-link').click(function(){
      if($(window).width() < 800 ){
        $('html, body').animate({
      scrollTop: $(".about").offset().top-75
          }, 1000)
      }else {
        $('html, body').animate({
      scrollTop: $(".about").offset().top
          }, 1000)
      }

    });

    $('.services-link').click(function(){
      if($(window).width() < 800 ){
        $('html, body').animate({
      scrollTop: $(".services").offset().top-75
          }, 1000)
      }else {
        $('html, body').animate({
      scrollTop: $(".services").offset().top
          }, 1000)
      }

    });
    $('.resources-link').click(function(){
      if($(window).width() < 800 ){
        $('html, body').animate({
          scrollTop: $(".resources").offset().top-75
          }, 1000)
      }else {
        $('html, body').animate({
          scrollTop: $(".resources").offset().top
          }, 1000)
      }

    });

    $('.contact-link').click(function(){
      if($(window).width() < 800 ){
        $('html, body').animate({
      scrollTop: $(".contact").offset().top-75
          }, 1000)
      }else {
        $('html, body').animate({
      scrollTop: $(".contact").offset().top
          }, 1000)
      }

    });


  }




}
