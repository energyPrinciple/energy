import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../../upload.service';
import { FileUploaderServiceService } from '../../file-uploader-service.service';
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";
import * as _ from 'lodash';
import { Upload } from '../../models/upload.model';

declare var $:any;

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent {

  files: FileList;
  upload: Upload;

  youtubelink: string = ""
  title: string;
  link: string = "";
  description: string;
  selectOption = 1;
  selectImageVidOption = 1;
  uploadType: string = "/blog";
  constructor(

    private us: UploadService,
    private authService: AuthService,
    private router: Router
  ) {

  }



  handleFiles(event) {
    this.files = event.target.files;
  }

  onImageVidChange(event) {
    console.log(event);
    if(event == 2) {
      this.selectImageVidOption = 2;
      $(".youtube-link-holder").show();
      $(".image-holder").hide();
    } else {
      this.selectImageVidOption = 1;
      $(".youtube-link-holder").hide();
      $(".image-holder").show();

    }
  }

  onSelectChange(event){


    if(event == 2){
      this.selectOption = 2;
      this.uploadType = "/things";
      $(".link-holder").show();
    } else {
      this.selectOption = 1;
      this.uploadType = "/blog";
      $(".link-holder").hide();
    }
    console.log(this.selectOption);
  }

  logOut() {
    this.authService.logout();
  }

  uploadFiles() {
    console.log(this.selectImageVidOption);
    if(this.selectImageVidOption == 1){
      const filesToUpload = this.files;
      const filesIdx = _.range(filesToUpload.length);
      console.log(filesToUpload.length);
      _.each(filesIdx, (idx) => {
        //file validation can go in here
        console.log(filesToUpload[idx]);
        console.log("title " + this.title);
        this.upload = new Upload(filesToUpload[idx]);
        this.us.uploadFile(this.uploadType,this.upload, this.title, this.description, this.link);
      });
    } else {

      this.us.uploadYoutubeLink(this.uploadType,this.title, this.description, this.link, this.youtubelink);

    }


  }
}
