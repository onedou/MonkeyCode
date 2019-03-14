import { IndexComponent } from './index.component'
import { NgModule } from '@angular/core'
import { ComponentsModule } from '../component.module'

@NgModule({
  declarations: [IndexComponent],
  imports: [
    ComponentsModule
  ]
})
export class IndexModule {}
