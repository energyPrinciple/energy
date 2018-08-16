import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../../upload.service';
import { FileUploaderServiceService } from '../../file-uploader-service.service';
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";
import * as _ from 'lodash';
import { Upload } from '../../models/upload.model';
import { UploadTest } from '../../models/uploadtest.model';

declare var $:any;

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  files: FileList;
  upload: UploadTest;

  name: string;

  testimonial: string;

  uploadType: string = "/testimonial";
  constructor(
    private us: UploadService,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
  }



  uploadFiles() {

      this.us.uploadTestimonial(this.name, this.testimonial);
  

  }

}
