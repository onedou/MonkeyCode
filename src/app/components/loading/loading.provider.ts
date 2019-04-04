import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material'
import { LoadingComponent } from './loading.component'

@Injectable({
  providedIn: 'root'
})

export class LoadingProvider {
  dialogIns:any
  constructor (
    public dialog: MatDialog
  ) {}

  open(sec) {
    this.dialogIns = this.dialog.open(LoadingComponent, {
      disableClose: true
    })
    this.countDown(sec)
  }

  close() {
    this.dialogIns.close()
  }

  countDown(num) {
    if(num > 0) {
      num --
      this.dialogIns.afterClosed().subscribe(() => {
        return false
      })
      setTimeout(() => {
        this.countDown(num)
      },1000)
    }else {
      this.dialogIns.close()
    }
  }
}