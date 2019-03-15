import { Component } from '@angular/core'

declare const $

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  title = 'MonkeyCode'

  constructor() {}

  ngAfterViewInit() {
    $('.flexslider').flexslider({
      animation: 'slide'
    })
  }
}
