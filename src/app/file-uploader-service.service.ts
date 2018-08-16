import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient, HttpHeaders, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FileUploaderServiceService {

  constructor(private _http: Http) { }

  public uploadImage(formdata: any) {
    let _url: string = "tepscripts/upload-image.php";
    return this._http.post(_url, formdata)
    .catch(this._errorHandler);
  }

  private _errorHandler(error: Response) {
    console.log('Error Occured: ' + error);
    return Observable.throw(error || 'Some Error on server occured');
  }

  public getFilesList() {
    let _url: string = "tepscripts/get-images.php";
    return this._http.get(_url)
    .catch(this._errorHandler);
  }


}
