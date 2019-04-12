import { Component } from '@angular/core'
import { ApiService } from '../../../api/api.service'
import { error } from 'util'
import { LoadingProvider } from '../../components/loading/loading.provider'
import { AlertProvider } from '../../components/alert/alert.provider'
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

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

    // const test = this.phone.toString()

    function dataFilter(nameRe: RegExp): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {'name': {value: control.value}} : null;
      }
    }

    const signUpData = new FormGroup(
      {
        'name': new FormControl(
          this.studentName, [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(4),
            dataFilter(/^[u4E00-u9FA5]/)
          ]
        ),
        'phone': new FormControl(
          this.phone, [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            dataFilter(/^1[1,2,6,9][0-9]{9}$/)
          ]
        )
      }
    )

    const name = signUpData.get('name')
    const phone = signUpData.get('phone')

    if(name.invalid) {
      this.alertProvider.open('学生姓名格式错误')
      return false
    }

    if(phone.invalid) {
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
