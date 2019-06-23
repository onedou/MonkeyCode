import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'disc-menu',
  templateUrl: './discMenu.component.html',
  styleUrls: ['./discMenu.component.scss']
})
export class DiscMenuComponent {

  constructor(
    private router: Router
  ) {}

  openMenu: boolean = false

  url: string = this.router && this.router.url && this.router.url || ''

  button() {
    if(this.openMenu) {
      this.openMenu = false
    } else if (!this.openMenu) {
      this.openMenu = true
    }
  }
}