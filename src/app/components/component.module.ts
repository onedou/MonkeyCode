import { NgModule } from '@angular/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ComponentRoutingModule } from './component-routing.module'

import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { AlertComponent } from './alert/alert.component'
import { LoadingComponent } from './loading/loading.component'
import { BottomComponent } from './bottom/bottom.component'
import { DiscMenuComponent } from './discMenu/discMenu.component'


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AlertComponent,
    LoadingComponent,
    BottomComponent,
    DiscMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ComponentRoutingModule
  ],
  entryComponents: [
    FooterComponent,
    HeaderComponent,
    AlertComponent,
    LoadingComponent,
    BottomComponent,
    DiscMenuComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AlertComponent,
    LoadingComponent,
    BottomComponent,
    DiscMenuComponent
  ]
})

export class ComponentsModule { }