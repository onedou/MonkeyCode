import { Component, Inject } from '@angular/core'
import { SignUpService } from './signUp.service'
import { error } from 'util'
import { MatDialog } from '@angular/material'
import { AlertComponent } from '../../components/alert/alert.component'

@Component({
  selector: 'signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent {
  studentName: string
  phone: number
  education: string

  constructor(
    public signUpService: SignUpService,
    public dialog: MatDialog
    ){}

  async signUpSuccess(data) {
    try {
      await this.signUpService.addData(data)
      this.dialog.open(AlertComponent, {
        data: {
          animal: '报名成功'
        }
      }) 
    }catch {
      this.dialog.open(AlertComponent, {
        data: {
          animal: '信息错误请重新填写'
        }
      }) 
      console.error(error)
    }
  }

  private async signUp() {
    const nameIf =  /^[u4E00-u9FA5]+$/
    const name = this.studentName

    if(!name || nameIf.test(name)) {
      this.dialog.open(AlertComponent, {
        data: {
          animal: '学生姓名格式错误'
        }
      })
      return false
    }

    const phoneIf = /^[1][3,4,5,7,8][0-9]{9}$/
    const phoneNumber = this.phone

    if(!phoneNumber || !phoneIf.test(phoneNumber.toString())){ 
      this.dialog.open(AlertComponent, {
        data: {
          animal: '联系电话格式错误'
        }
      }) 
      return false
    }

    if(!this.education) {
      this.dialog.open(AlertComponent, {
        data: {
          animal: '请填写学生学历'
        }
      })
      return false
    }

    const data = {
      "student_name": this.studentName,
      "phone": this.phone,
      "education": this.education
    }
    
    this.signUpSuccess(data)
  }

}
