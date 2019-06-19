import { Component } from '@angular/core'

declare const $

@Component({
  selector: 'curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent {

  related: object = [
    {
      relatedTextA: "创作3D游戏",
      relatedTextB: "与动画作品",
      relatedImg: "../../../assets/images/related-pictures-left1.png"
    },
    {
      relatedTextA: "线上线下",
      relatedTextB: "同步指导",
      relatedImg: "../../../assets/images/related-pictures-left2.png"
    },
    {
      relatedTextA: "趣味与专业",
      relatedTextB: "兼顾融合",
      relatedImg: "../../../assets/images/related-pictures-left3.png"
    }
  ]
  constructor() {}
}