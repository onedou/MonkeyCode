import { SignUpComponent } from './signUp.component'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ComponentsModule } from '../../components/component.module'

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    ComponentsModule,
    CommonModule,
    FormsModule
  ]
})
export class SignUpModule {}
