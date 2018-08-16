import { Component, OnInit } from '@angular/core';
import { EmailSendService } from '../email-send.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


declare var $:any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  rForm: FormGroup;


    programs:boolean;
    keynotes:boolean;
    coaching:boolean;
    name:string = '';
    title:string = '';
    company:string = '';
    email:string = '';
    phone:string = '';
    titleAlert:string = 'This is required';


  constructor(
    private emailSendService: EmailSendService,
    private fb: FormBuilder
  ){
    this.rForm = fb.group({
      'programs': '',
      'keynotes': '',
      'coaching': '',
      'name' : [null, Validators.required],
      'title' : [null, Validators.required],
      'company' : [null, Validators.required],
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      'phone' : '',

    });
  }



  submitForm(post){
    this.programs = post.programs;
    this.keynotes = post.keynotes;
    this.coaching = post.coaching;
    this.name = post.name;
    this.title = post.title;
    this.company = post.company;
    this.email = post.email;
    this.phone = post.phone;

    this.emailSendService.sendDataToPhp(
      this.programs,
      this.keynotes,
      this.coaching,
      this.name,
      this.title,
      this.company,
      this.email,
      this.phone
    ).subscribe(
      (res:Response) => {
        console.log(res);
        $(".form").html("<div style='font-family: Cabin, sans-serif;font-size: 26px;text-align:center;margin-top:50%;'>THANK YOU!</div><br><div style='font-family: Cabin, sans-serif;font-size: 20px;text-align:center;margin-top:5px;'>You will receive a response shortly</div>");
        setTimeout(function(){

            if($(window).width() < 800){
              //keynotes
              $(".form-holder").animate({"height": "0px"}, 1000);
              $(".form-holder").css({"opacity":"0"});
              setTimeout(function(){
                $(".form-holder").css({"display": "none"});
              },1000);
              //left-one
              $(".form-holder-left-one").animate({"height": "0px"}, 1000);
              $(".form-holder-left-one").css({"opacity":"0"});
              setTimeout(function(){
                $(".form-holder-left-one").css({"display": "none"});
              },1000);
              //right-one
              $(".form-holder-right-one").animate({"height": "0px"}, 1000);
              $(".form-holder-right-one").css({"opacity":"0"});
              setTimeout(function(){
                $(".form-holder-right-one").css({"display": "none"});
              },1000);
              //left-three
              $(".form-holder-left-three").animate({"height": "0px"}, 1000);
              $(".form-holder-left-three").css({"opacity":"0"});
              setTimeout(function(){
                $(".form-holder-left-three").css({"display": "none"});
              },1000);
            }else {
              //keynotes
              $(".services-left-two").animate({"left": "0%"}, 1000);
              $(".form-holder").css({"opacity":"0"});
              setTimeout(function(){
                $(".form-holder").css({"display": "none"});
              },1000);
              //left-one
              $(".services-left-one").animate({"left": "0%"}, 1000);
              $(".form-holder-left-one").css({"opacity":"0"});
              setTimeout(function(){
                $(".form-holder-left-one").css({"display": "none"});
              },1000);
              //right-one
              $(".services-right-one").animate({"left": "50%"}, 1000);
              $(".form-holder-right-one").css({"opacity":"0"});
              setTimeout(function(){
                $(".form-holder-right-one").css({"display": "none"});
              },1000);
              //left-three
              $(".services-left-three").animate({"left": "0%"}, 1000);
              $(".form-holder-left-three").css({"opacity":"0"});
              setTimeout(function(){
                $(".form-holder-left-three").css({"display": "none"});
              },1000);

            }


        },2000);
      },
      error => {
        console.log("post error", error);

      },
      () => {
        console.log("The POST observable is now completed.");
      }
    );

  }

  ngOnInit() {
    $(".keynotes-request").click(function(){

      if($(window).width() < 800){
        $('html, body').animate({scrollTop: '+=150px'}, 800);
        $(".form-holder").css({"display": "block"});
        $(".form-holder").animate({"height": "550px"}, 500);
        setTimeout(function(){
          $(".form-holder").animate({"opacity":"1"},1000);
        },1000);

      } else {
        $(".services-left-two").animate({"left": "-50%"}, 1000);
        $(".form-holder").css({"display": "block"});

        $(".form-holder").animate({"opacity":"1"},1000);
      }
    });

    $(".coaching-request").click(function(){

      if($(window).width() < 800){
        $('html, body').animate({scrollTop: '+=150px'}, 800);
        $(".form-holder-left-three").css({"display": "block"});
        $(".form-holder-left-three").animate({"height": "550px"}, 500);
        setTimeout(function(){
          $(".form-holder-left-three").animate({"opacity":"1"},1000);
        },1000);

      } else {
        $(".services-left-three").animate({"left": "-50%"}, 1000);
        $(".form-holder-left-three").css({"display": "block"});

        $(".form-holder-left-three").animate({"opacity":"1"},1000);
      }
    });

    $(".programs-request-right").click(function(){
      if($(window).width() < 800){
        $('html, body').animate({scrollTop: '+=150px'}, 800);
        $(".form-holder-right-one").css({"display": "block"});
        $(".form-holder-right-one").animate({"height": "550px"}, 500);
        setTimeout(function(){
          $(".form-holder-right-one").animate({"opacity":"1"},1000);
        },1000);

      } else {
        $(".services-right-one").animate({"left": "100%"}, 1000);
        $(".form-holder-right-one").css({"display": "block"});

        $(".form-holder-right-one").animate({"opacity":"1"},1000);
      }

    });
    $(".programs-request-left").click(function(){
      if($(window).width() < 800){
        $('html, body').animate({scrollTop: '+=150px'}, 800);
        $(".form-holder-left-one").css({"display": "block"});
        $(".form-holder-left-one").animate({"height": "550px"}, 500);
        setTimeout(function(){
          $(".form-holder-left-one").animate({"opacity":"1"},1000);
        },1000);
      }else {
        $(".services-left-one").animate({"left": "-50%"}, 1000);
        $(".form-holder-left-one").css({"display": "block"});

        $(".form-holder-left-one").animate({"opacity":"1"},1000);
      }
    });

    $(".x-button-keynotes").click(function(){
      if($(window).width() < 800){

        $(".form-holder").animate({"height": "0px"}, 1000);
        $(".form-holder").css({"opacity":"0"});
        setTimeout(function(){

          $(".form-holder").css({"display": "none"});
        },1000);
      }else {
      $(".services-left-two").animate({"left": "0%"}, 1000);
      $(".form-holder").css({"opacity":"0"});
      setTimeout(function(){

        $(".form-holder").css({"display": "none"});
      },1000);
    }
  });

    $(".x-button-left-one").click(function(){
      if($(window).width() < 800){

        $(".form-holder-left-one").animate({"height": "0px"}, 1000);
        $(".form-holder-left-one").css({"opacity":"0"});
        setTimeout(function(){

          $(".form-holder-left-one").css({"display": "none"});
        },1000);
      }else {
        $(".services-left-one").animate({"left": "0%"}, 1000);
        $(".form-holder-left-one").css({"opacity":"0"});
        setTimeout(function(){

          $(".form-holder-left-one").css({"display": "none"});
        },1000);
      }
    });

    $(".x-button-right-one").click(function(){
      if($(window).width() < 800){

        $(".form-holder-right-one").animate({"height": "0px"}, 1000);
        $(".form-holder-right-one").css({"opacity":"0"});
        setTimeout(function(){

          $(".form-holder-right-one").css({"display": "none"});
        },1000);
      }else {
        $(".services-right-one").animate({"left": "50%"}, 1000);
        $(".form-holder-right-one").css({"opacity":"0"});
        setTimeout(function(){

          $(".form-holder-right-one").css({"display": "none"});
        },1000);
      }

    });

    $(".x-button-left-three").click(function(){
      if($(window).width() < 800){

        $(".form-holder-left-three").animate({"height": "0px"}, 1000);
        $(".form-holder-left-three").css({"opacity":"0"});
        setTimeout(function(){

          $(".form-holder-left-three").css({"display": "none"});
        },1000);
      }else {
      $(".services-left-three").animate({"left": "0%"}, 1000);
      $(".form-holder-left-three").css({"opacity":"0"});
      setTimeout(function(){

        $(".form-holder-left-three").css({"display": "none"});
      },1000);
    }
  });

  }

}
