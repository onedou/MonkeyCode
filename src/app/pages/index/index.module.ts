import { IndexComponent } from './index.component'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material'

import { ComponentsModule } from '../../components/component.module'

import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [];
@NgModule({
  declarations: [IndexComponent],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    ComponentsModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ]
})
export class IndexModule {}
