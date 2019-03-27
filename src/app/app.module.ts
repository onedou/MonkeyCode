import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { AlertComponent } from '../app/components/alert/alert.component'
import { AlertModule } from '../app/components/alert/alert.module'

import { LodingComponent } from '../app/components/loding/loding.component'
import { LodingModule } from '../app/components/loding/loding.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AlertModule,
    LodingModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent,
    LodingComponent
  ]
})
export class AppModule { }
