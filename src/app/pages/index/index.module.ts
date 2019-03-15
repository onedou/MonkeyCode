import { IndexComponent } from './index.component'
import { NgModule } from '@angular/core'

import { FooterModule } from '../../components/footer/footer.module'
import { HeaderModule } from '../../components/header/header.module'

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    HeaderModule,
    FooterModule
  ]
})
export class IndexModule {}
