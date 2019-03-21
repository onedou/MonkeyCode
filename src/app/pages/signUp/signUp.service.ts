import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'

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
  addApi: string = 'api/signup/monkeycode'

  constructor(private http: HttpClient) { }

  // 报名添加信息
  addData(data) {
    let url = environment.api + this.addApi
    return this.http.post(url, data , httpOptions).toPromise()
  }
}