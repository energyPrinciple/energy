import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmailSendService {



  private sendEmailUrl ="/tepscripts/send-email.php";
//http://localhost/tepscripts/send-email.php
  constructor(
    private http: HttpClient
  ) { }

  sendDataToPhp(programs,keynotes,coaching,name,title,company,email,phone) {

    const programSelection = {
      'programs': programs,
      'keynotes': keynotes,
      'coaching': coaching,
      'name': name,
      'title': title,
      'company': company,
      'email': email,
      'phone': phone
    }


    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-allow-origin': '*'
    })};
    return this.http.post(this.sendEmailUrl, programSelection, httpOptions);
  }

}
