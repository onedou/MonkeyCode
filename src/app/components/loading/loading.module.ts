import { LoadingComponent } from './loading.component'
import { NgModule } from '@angular/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [LoadingComponent],
  exports: [
    LoadingComponent,
    MatProgressSpinnerModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class LoadingModule {}
