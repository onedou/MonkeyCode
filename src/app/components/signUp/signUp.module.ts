import { signUpComponent } from './signUp.component'
import { NgModule } from '@angular/core'
import { ComponentsModule } from '../component.module'

@NgModule({
  declarations: [signUpComponent],
  imports: [
    ComponentsModule
  ]
})
export class signUpModule {}
