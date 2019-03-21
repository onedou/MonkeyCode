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

  constructor(private http: HttpClient) { }
  getConfig(data) {
    return this.http.post(environment.api, data , httpOptions).toPromise()
  }
}