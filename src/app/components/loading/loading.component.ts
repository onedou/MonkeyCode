import { Component, Inject, Input } from '@angular/core'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() loadingShow:boolean = false
  @Input() loadingShowNumber: number

  color = 'primary'
  mode = 'indeterminate'
  value = 50

  ngOnChanges(loadingShow: boolean) {
    setTimeout(() => {
      if(this.loadingShow) {
        this.loadingShow = false
      }
    }, this.loadingShowNumber)
  }
}