import { LodingComponent } from './loding.component'
import { NgModule } from '@angular/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [LodingComponent],
  exports: [
    LodingComponent,
    MatProgressSpinnerModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class LodingModule {}
