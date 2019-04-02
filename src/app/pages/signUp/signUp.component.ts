import { Component } from '@angular/core'
import { SignUpService } from './signUp.service'
import { error } from 'util'
import { MatDialog } from '@angular/material'
// import { AlertComponent } from '../../components/alert/alert.component'
import { LoadingProvider } from '../../components/loading/loading.provider'
import { AlertProvider } from '../../components/alert/alert.provider'

@Component({
  selector: 'signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent {
  studentName: string
  phone: number
  education: string
  test: boolean

  constructor(
    public signUpService: SignUpService,
    public dialog: MatDialog,
    public loading: LoadingProvider,
    public alert: AlertProvider
    ){}

  async signUpSuccess(data) {
    try {
      await this.signUpService.addData(data)
      this.loading.alertClose()
      this.alert.alertOpen('报名成功')
    }catch {
      this.alert.alertOpen('信息错误请重新填写')
      this.loading.alertClose()
      console.error(error)
    }
  }

  async signUp() {
    const nameIf =  /^[u4E00-u9FA5]+$/
    const name = this.studentName

    if(!name || nameIf.test(name)) {
      this.alert.alertOpen('学生姓名格式错误')
      return false
    }

    const phoneIf = /^[1][3,4,5,7,8][0-9]{9}$/
    const phoneNumber = this.phone

    if(!phoneNumber || !phoneIf.test(phoneNumber.toString())){ 
      this.alert.alertOpen('联系电话格式错误')
      return false
    }

    if(!this.education) {
      this.alert.alertOpen('请填写学生学历')
      return false
    }

    this.loading.alertOpen(10)

    const data = {
      "student_name": this.studentName,
      "phone": this.phone,
      "education": this.education
    }
    
    this.signUpSuccess(data)
  }

}
