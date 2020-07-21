import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallary',
  templateUrl: './photo-gallary.component.html',
  styleUrls: ['./photo-gallary.component.css']
})
export class PhotoGallaryComponent implements OnInit {
  Pictures : {url:String}[] = [{url: '../../assets/image/gallary1.jpeg'},
  {url: '../../assets/image/gallary2.jpeg'},
  {url: '../../assets/image/gallary3.jpeg'},
  {url: '../../assets/image/gallary4.jpeg'},
  {url: '../../assets/image/gallary6.jpeg'},
  {url: '../../assets/image/gallary8.jpeg'},
  {url: '../../assets/image/gallary9.jpeg'},
  {url: '../../assets/image/gallary10.jpeg'},
  {url: '../../assets/image/gallary11.jpeg'},
  {url: '../../assets/image/gallary12.jpeg'},
  {url: '../../assets/image/gallery13.jpeg'},
  {url: '../../assets/image/gallery14.jpeg'},
  {url: '../../assets/image/gallery15.jpeg'},
  {url: '../../assets/image/gallery16.jpeg'},
  {url: '../../assets/image/gallery17.jpeg'},
  {url: '../../assets/image/gallery18.jpeg'},
  {url: '../../assets/image/gallery19.jpeg'},
  {url: '../../assets/image/gallery20.jpeg'},
  {url: '../../assets/image/gallery21.jpeg'},
  {url: '../../assets/image/gallery22.jpeg'},
  {url: '../../assets/image/gallery24.jpeg'},
  {url: '../../assets/image/gallery25.jpeg'},
  {url: '../../assets/image/gallery26.jpeg'},
  {url: '../../assets/image/gallery27.jpeg'},
  {url: '../../assets/image/gallery28.jpeg'},
  {url: '../../assets/image/gallery29.jpeg'},
  {url: '../../assets/image/gallery30.jpeg'},
  {url: '../../assets/image/gallery31.jpeg'},
  {url: '../../assets/image/gallery32.jpeg'},
  {url: '../../assets/image/gallery33.jpeg'}]
  constructor() { }

  ngOnInit() {
  }

}
