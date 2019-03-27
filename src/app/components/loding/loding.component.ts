import { Component, Inject, Input } from '@angular/core'

@Component({
  selector: 'loding',
  templateUrl: './loding.component.html',
  styleUrls: ['./loding.component.scss']
})
export class LodingComponent {
  @Input() lodingShow:boolean

  color = 'primary'
  mode = 'indeterminate'
  value = 50

}