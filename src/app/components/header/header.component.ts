import { Component } from '@angular/core'
import { Router } from '@angular/router'
// import { Location } from '@angular/common'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private router: Router
  ) {}

  url: string = this.router && this.router.url && this.router.url || ''
}
