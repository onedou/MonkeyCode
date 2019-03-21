import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};

@Injectable()
export class SignUpService {
  studentName: string
  phone: number
  education: string

  constructor(private http: HttpClient) { }
  configUrl = 'http://api.bel.org.cn/api/signup/monkeycode'
  test = {
    
  }
  getConfig(data) {
    return this.http.post(this.configUrl,data , httpOptions).toPromise()
  }
}