import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material'
import { AlertComponent } from './alert.component'

@Injectable({
  providedIn: 'root'
})

export class AlertProvider {
  open:any
  constructor (
    public dialog: MatDialog
  ) {}

  alertOpen(text) {
    this.open = this.dialog.open(AlertComponent, {
      data: text
    })
  }
}