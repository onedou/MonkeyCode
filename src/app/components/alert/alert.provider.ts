import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material'
import { AlertComponent } from './alert.component'

@Injectable({
  providedIn: 'root'
})

export class AlertProvider {
  alertIns:any
  constructor (
    public dialog: MatDialog
  ) {}

  open(text) {
    this.alertIns = this.dialog.open(AlertComponent, {
      data: text
    })
  }
}