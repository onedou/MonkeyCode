import { SignUpComponent } from './signUp.component'
import { NgModule } from '@angular/core'

import { FooterModule } from '../../components/footer/footer.module'
import { HeaderModule } from '../../components/header/header.module'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { SignUpService } from './signUp.service'

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    HeaderModule,
    FooterModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    SignUpService
  ],
})
export class SignUpModule {}
