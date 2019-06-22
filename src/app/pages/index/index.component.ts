import { Component } from '@angular/core'
import { Router } from '@angular/router'

declare const $

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  title = 'MonkeyCode'

  constructor(
    private router: Router
  ) {}

  url: string = this.router && this.router.url && this.router.url || ''

  ngAfterViewInit() {
    $('.flexslider').flexslider({
      animation: 'slide'
    })
  }
}
