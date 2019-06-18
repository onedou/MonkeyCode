import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent {
  constructor(
    private router: Router
  ) {}

  url: string = this.router && this.router.url && this.router.url || ''
}