import { IndexComponent } from './index.component'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material'

import { ComponentsModule } from '../../components/component.module'


@NgModule({
  declarations: [IndexComponent],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    ComponentsModule
  ]
})
export class IndexModule {}
