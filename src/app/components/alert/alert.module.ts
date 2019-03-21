import { AlertComponent } from './alert.component'
import { NgModule } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AlertComponent],
  exports: [AlertComponent],
  imports:[
    MatDialogModule,
    CommonModule,
    FormsModule
  ]
})
export class AlertModule {}
