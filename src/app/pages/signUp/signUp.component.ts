import { Component, Inject, Input } from '@angular/core'
import { SignUpService } from './signUp.service'
import { error } from 'util'
import { MatDialog } from '@angular/material'
import { AlertComponent } from '../../components/alert/alert.component'
import { VIEWPORT_RULER_PROVIDER_FACTORY } from '@angular/cdk/scrolling';

@Component({
  selector: 'signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent {
  studentName: string
  phone: number
  education: string
  lodingShow = false

  constructor(
    public signUpService: SignUpService,
    public dialog: MatDialog
    ){}

  async signUpSuccess(data) {
    try {
      await this.signUpService.addData(data)
      this.lodingShow = false
      this.dialog.open(AlertComponent, {
        data: '报名成功'
      }) 
    }catch {
      this.lodingShow = false
      this.dialog.open(AlertComponent, {
        data: '信息错误请重新填写'
      }) 
      console.error(error)
    }
  }

  setTimeOutShow() {
    setTimeout(() => {
      if(this.lodingShow) {
        this.lodingShow = false
        this.dialog.open(AlertComponent, {
          data: '网络延迟，请稍等'
        })
      }
    }, 5000)
  }

  async signUp() {
    const nameIf =  /^[u4E00-u9FA5]+$/
    const name = this.studentName

    if(!name || nameIf.test(name)) {
      this.dialog.open(AlertComponent, {
        data: '学生姓名格式错误'
      })
      return false
    }

    const phoneIf = /^[1][3,4,5,7,8][0-9]{9}$/
    const phoneNumber = this.phone

    if(!phoneNumber || !phoneIf.test(phoneNumber.toString())){ 
      this.dialog.open(AlertComponent, {
        data: '联系电话格式错误'
      }) 
      return false
    }

    if(!this.education) {
      this.dialog.open(AlertComponent, {
        data: '请填写学生学历'
      })
      return false
    }

    this.lodingShow = true

    const data = {
      "student_name": this.studentName,
      "phone": this.phone,
      "education": this.education
    }
    
    this.signUpSuccess(data)
    this.setTimeOutShow()
  }

}
