import { Component } from '@angular/core'
import { WOW } from 'wowjs'

declare const $

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  title = 'MonkeyCode'

  constructor() {
    new WOW().init()
  }

  ngAfterViewInit() {
    $('.flexslider').flexslider({
      animation: 'slide',
      start: function(slider) {
        $('body').removeClass('loading')
      }
    })
  }
}
