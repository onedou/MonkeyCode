import { Component } from '@angular/core';
import { SignUpService } from './signUp.service'
import { error } from 'util';

@Component({
  selector: 'signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent {
  studentName: string
  phone: number
  education: string

  constructor(public signUpService: SignUpService){}
  async showConfig(data) {
    try {
      await this.signUpService.getConfig(data)
      alert("报名成功")
    }catch {
      alert("信息有误请重新填写")
      console.error(error)
    }
  }

  private async test() {
    let nameIf =  /^[u4E00-u9FA5]+$/
    let name = this.studentName
    if(nameIf.test(name)) {
      alert("请填写正确的学生姓名")
      return false
    }
    let phoneIf = /^[1][3,4,5,7,8][0-9]{9}$/
    let phoneNumber = this.phone
    if(!phoneIf.test(phoneNumber.toString())){ 
      alert("手机号码有误，请重填")  
      return false
  } 
    if(!this.education) {
      alert("请选择学生学历")
      return false
    }
    let data = {
      "student_name": this.studentName,
      "phone": this.phone,
      "education": this.education
    }
    
    this.showConfig(data)
  }

}
