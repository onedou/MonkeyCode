import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'suspension',
  templateUrl: './suspension.component.html',
  styleUrls: ['./suspension.component.scss']
})
export class SuspensionComponent {
  constructor(
    private router: Router
  ) {}

  url: string = this.router && this.router.url && this.router.url || ''
}
