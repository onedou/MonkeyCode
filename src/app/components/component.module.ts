import { NgModule } from '@angular/core'

import { FooterModule } from './footer/footer.module'
import { HeaderModule } from './header/header.module'
import { AlertModule } from './alert/alert.module'
import { LoadingModule } from './loading/loading.module'

import { AlertComponent } from './alert/alert.component'
import { LoadingComponent } from './loading/loading.component'

@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
    AlertModule,
    LoadingModule
  ],
  entryComponents: [
    AlertComponent,
    LoadingComponent
  ]
})

export class ComponentsModule { }