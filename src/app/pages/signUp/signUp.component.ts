import { Component } from '@angular/core'
import { ApiService } from '../../../api/api.service'
import { error } from 'util'
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

  constructor(
    public apiService: ApiService,
    public loadingProvider: LoadingProvider,
    public alertProvider: AlertProvider
    ){}

  async signUpSuccess(data) {
    try {
      await this.apiService.signUp(data)
      this.loadingProvider.close()
      this.alertProvider.open('报名成功')
    }catch {
      this.alertProvider.open('信息错误请重新填写')
      this.loadingProvider.close()
      console.error(error)
    }
  }

  async signUp() {
    const nameIf =  /^[u4E00-u9FA5]+$/
    const name = this.studentName

    if(!name || nameIf.test(name)) {
      this.alertProvider.open('学生姓名格式错误')
      return false
    }

    const phoneIf = /^[1][3,4,5,7,8][0-9]{9}$/
    const phoneNumber = this.phone

    if(!phoneNumber || !phoneIf.test(phoneNumber.toString())){ 
      this.alertProvider.open('联系电话格式错误')
      return false
    }

    if(!this.education) {
      this.alertProvider.open('请填写学生学历')
      return false
    }

    this.loadingProvider.open(10)

    const data = {
      "student_name": this.studentName,
      "phone": this.phone,
      "education": this.education
    }
    
    this.signUpSuccess(data)
  }

}
