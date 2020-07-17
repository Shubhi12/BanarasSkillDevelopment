import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggle:boolean[];
  constructor() { }

  ngOnInit() {
    this.toggle=[false, false, false, false, false, false, false, true];
  }

  addCss(flag)
  {
    this.toggle=[false, false, false, false, false, false, false, false];
    this.toggle[flag]=true;
  }

}
