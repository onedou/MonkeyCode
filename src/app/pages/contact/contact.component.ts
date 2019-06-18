import { Component, OnInit } from '@angular/core'
declare var BMap: any;
declare const $

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const map = new BMap.Map('map');//创建地图实例
    const point = new BMap.Point(113.088134,22.96479);//创建点坐标
    map.centerAndZoom(point, 15);//初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);//开启鼠标滚轮缩
    map.addControl(new BMap.NavigationControl());    
    map.addControl(new BMap.ScaleControl());    
    map.addControl(new BMap.OverviewMapControl());    
    map.addControl(new BMap.MapTypeControl());    
    var marker = new BMap.Marker(point);        // 创建标注    
    map.addOverlay(marker);
  }
}