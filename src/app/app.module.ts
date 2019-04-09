import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ComponentsModule } from '../app/components/component.module'

import { LoadingProvider } from '../app/components/loading/loading.provider'
import { AlertProvider } from '../app/components/alert/alert.provider'

import { ApiService } from '../api/api.service'

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
    ComponentsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: [
    LoadingProvider,
    AlertProvider,
    ApiService
  ]
})
export class AppModule { }
