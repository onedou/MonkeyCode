import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material'
import { LoadingComponent } from './loading.component'

@Injectable({
  providedIn: 'root'
})

export class LoadingProvider {
  open:any
  close: boolean = false
  constructor (
    public dialog: MatDialog
  ) {}

  alertOpen(sec) {
    this.open = this.dialog.open(LoadingComponent, {
      disableClose: true
    })
    this.countDown(sec)
  }

  alertClose() {
    this.open.close()
  }

  countDown(num) {
    if(num > 0) {
      num --
      this.open.afterClosed().subscribe(() => {
        return false
      })
      setTimeout(() => {
        this.countDown(num)
      },1000)
    }else {
      this.open.close()
    }
  }
}