import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireModule }    from 'angularfire2';
import { Projects }             from './models/projects.model';

import { AngularFireDatabase } from 'angularfire2/database';
import { Upload }                 from './models/upload.model';
import { UploadTest }                 from './models/uploadtest.model';
import * as firebase            from 'firebase';
@Injectable()
export class UploadService {
  //http://localhost/tepscripts/upload-file.php
  ///tepscripts/upload-file.php


  constructor(
    private ngFire: AngularFireModule,
    private db: AngularFireDatabase
  ) { }



  todaysDate(){
    var result ='';
    var today = new Date();
    var dd = String(today.getDate());
    var ddNum = today.getDate();
    var mm = String(today.getMonth()+1);
    var mmNum = today.getMonth()+1;
    var yyyy = String(today.getFullYear());
    if(ddNum<10) {
      dd = '0'+dd;
    }
    if(mmNum<10) {
      mm = '0'+mm;
    }
    result = dd+"-"+mm+"-"+yyyy;

    return result;
  }

  uploadYoutubeLink(uploadType: string, title: string, description: string, link: string, youtubelink: string){
    console.log("youtube" + uploadType);
    console.log("uptype" + uploadType);
    var created = this.todaysDate();
    this.db.list(`${uploadType}/`).push({title: title, description: description, link: link, youtubelink: youtubelink, created: created});
    alert("Upload youtube successful");

  }

  uploadTestimonial(name: string, testimonial: string){
    console.log("testimonial");
    const uploadType = "testimonial";
    this.db.list(`${uploadType}/`).push({name: name, testimonial: testimonial});
    alert("Upload Testimonial successful");

}

private saveTestFileData(uploadPost: UploadTest, uploadType: string) {
  this.db.list(`${uploadType}/`).push(uploadPost);
  alert("Upload successful");
}


  uploadFile(uploadType: string, uploadFile: Upload, title: string, description: string, link: string) {


      console.log("uptype" + uploadType);
      const storageRef  = firebase.storage().ref();
      const uploadTask  = storageRef.child(`${uploadType}/${uploadFile.file.name}`)
      .put(uploadFile.file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //3 observers
    //1. STATE_CHANGED observers
    (snapshot) => {
      //upload in progress


    },
    // 2. error observers
    (error) => {
      //upload failed
      console.log(error);
    },
    // success
    (): any => {
      uploadFile.url = uploadTask.snapshot.downloadURL;
      uploadFile.link = link;
      uploadFile.title = title;
      uploadFile.description = description;
      uploadFile.created = this.todaysDate();
      this.saveFileData(uploadFile, uploadType);
    });

  }

  private saveFileData(uploadPost: Upload, uploadType: string) {
    this.db.list(`${uploadType}/`).push(uploadPost);
    alert("Upload successful");
  }



}
