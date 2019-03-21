import { Component, Inject } from '@angular/core'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  animal: 'studentName' | 'phone' | 'education' | 'success' | 'error'
  constructor(@Inject(MAT_DIALOG_DATA) public data: AlertComponent) {}
  studentName(){
    if(this.data.animal === 'studentName') {
      return true
    }
  }
  phone() {
    if(this.data.animal === 'phone') {
      return true
    }
  }
  education() {
    if(this.data.animal === 'education') {
      return true
    }
  }
  success() {
    if(this.data.animal === 'success') {
      return true
    }
  }
  error() {
    if(this.data.animal === 'error') {
      return true
    }
  }
}