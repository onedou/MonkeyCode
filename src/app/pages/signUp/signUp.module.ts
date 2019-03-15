import { signUpComponent } from './signUp.component'
import { NgModule } from '@angular/core'

import { FooterModule } from '../../components/footer/footer.module'
import { HeaderModule } from '../../components/header/header.module'

@NgModule({
  declarations: [signUpComponent],
  imports: [
    HeaderModule,
    FooterModule
  ]
})
export class signUpModule {}
