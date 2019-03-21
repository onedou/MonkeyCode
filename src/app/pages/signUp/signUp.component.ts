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

  async showConfig(data) {
    try {
      await this.signUpService.getConfig(data)
      this.dialog.open(AlertComponent, {
        data: {
          animal: 'success'
        }
      }) 
    }catch {
      this.dialog.open(AlertComponent, {
        data: {
          animal: 'error'
        }
      }) 
      console.error(error)
    }
  }

  private async signUp() {
    let nameIf =  /^[u4E00-u9FA5]+$/
    let name = this.studentName

    if(nameIf.test(name)) {
      this.dialog.open(AlertComponent, {
        data: {
          animal: 'studentName'
        }
      })
      return false
    }

    let phoneIf = /^[1][3,4,5,7,8][0-9]{9}$/
    let phoneNumber = this.phone

    if(!phoneNumber || !phoneIf.test(phoneNumber.toString())){ 
      this.dialog.open(AlertComponent, {
        data: {
          animal: 'phone'
        }
      }) 
      return false
    }

    if(!this.education) {
      this.dialog.open(AlertComponent, {
        data: {
          animal: 'education'
        }
      })
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
