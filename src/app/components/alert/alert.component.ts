import { Component, Inject } from '@angular/core'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: AlertComponent) {}
}