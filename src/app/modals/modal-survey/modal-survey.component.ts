import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-survey',
  templateUrl: './modal-survey.component.html',
  styleUrls: ['./modal-survey.component.css']
})
export class ModalSurveyComponent implements OnInit {
  MailchimpForm: FormGroup;
  timeX: number = 4;
  intervalMe;
  focusStatus: number = 0;
  url: string = "http://www.theenergyprinciple.com.au/energy_survey/";
  mailchimpCode: string = "b_abcdc2321e61030e5c89e44ea_5dbaa640c0";

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: BsModalRef,
    private router: Router) {
 }

  ngOnInit() {
    this.MailchimpForm = this.formBuilder.group({
        chimpFname: ['', Validators.required],
        chimpLname: ['', Validators.required],
        chimpEmail: ['', Validators.required],
        chimpCode: ['', Validators.required]
    });
    this.intervalMe = setInterval(()=>{
            this.closeMe();
    },1000);
  }

  get f() { return this.MailchimpForm.controls; }

  takeSurvey(){
    console.log(this.f.chimpEmail.value)
    this.url = this.url + '?FNAME=' + this.f.chimpFname.value +
     '&LNAME=' + this.f.chimpLname.value +
     '&EMAIL=' + this.f.chimpEmail.value +
     '&' + this.mailchimpCode + '=' +  this.f.chimpCode.value +
     '&subscribe=TAKE+SURVEY';
    window.location.href = this.url ;
  }
  focusMe(status){
    this.focusStatus = status;
  }
  activeModal(){
      // this.timeX = 4;
      // if (this.intervalMe) {
      //   clearInterval(this.intervalMe);
      // }
  }
  inactiveModal(){
    // if (this.focusStatus == 0)  {
    //     if ( (this.f.chimpFname.value === '') && (this.f.chimpLname.value === '') && (this.f.chimpEmail.value === ''))  {
    //         this.intervalMe = setInterval(()=>{
    //                 this.closeMe();
    //         },1000);
    //   }
    // }
  }
  closeMe(){
        // this.timeX = this.timeX - 1;
        // console.log(this.timeX);
        // if (this.timeX === 0){
        //   clearInterval(this.intervalMe);
          // this.modalRef.hide();

          // this.unsubscribe;
        // }
  }
  closeModal(){
      this.modalRef.hide();
  }
  ngOnDestroy() {
    if (this.intervalMe) {
      clearInterval(this.intervalMe);
    }
  }
}

export interface ConfirmModel {
  firstName:string;
  lastName:string;
  eMail:string;
  b_abcdc2321e61030e5c89e44ea_5dbaa640c0: string;
}
