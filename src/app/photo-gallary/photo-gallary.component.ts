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
  {url: '../../assets/image/gallary12.jpeg'}]
  constructor() { }

  ngOnInit() {
  }

}
