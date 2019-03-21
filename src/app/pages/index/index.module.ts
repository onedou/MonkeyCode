import { IndexComponent } from './index.component'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material'

import { FooterModule } from '../../components/footer/footer.module'
import { HeaderModule } from '../../components/header/header.module'

@NgModule({
  declarations: [IndexComponent],
  imports: [
    HeaderModule,
    FooterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ]
})
export class IndexModule {}
