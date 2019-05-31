import { CurriculumComponent } from './curriculum.component'
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
    CurriculumComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    ComponentsModule,
    BrowserModule
  ]
})
export class CurriculumModule {}
