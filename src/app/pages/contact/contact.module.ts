import { ContactComponent } from './contact.component'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser'
import { ComponentsModule } from '../../components/component.module'


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    ComponentsModule,
    BrowserModule
  ]
})
export class ContactModule {}