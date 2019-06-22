import { NgModule } from '@angular/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ComponentRoutingModule } from './component-routing.module'

import { FooterComponent } from '../pages/common/footer/footer.component'
import { HeaderComponent } from '../pages/common/header/header.component'
import { AlertComponent } from './alert/alert.component'
import { LoadingComponent } from './loading/loading.component'
import { BottomComponent } from '../pages/common/bottom/bottom.component'
import { DiscMenuComponent } from '../pages/common/discMenu/discMenu.component'
import { SuspensionComponent } from '../pages/common/suspension/suspension.component'


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AlertComponent,
    LoadingComponent,
    BottomComponent,
    DiscMenuComponent,
    SuspensionComponent
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
    DiscMenuComponent,
    SuspensionComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AlertComponent,
    LoadingComponent,
    BottomComponent,
    DiscMenuComponent,
    SuspensionComponent
  ]
})

export class ComponentsModule { }