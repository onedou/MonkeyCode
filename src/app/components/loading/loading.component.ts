import { Component, Input } from '@angular/core'

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  constructor() {}

  color = 'primary'
  mode = 'indeterminate'
  value = 50
}