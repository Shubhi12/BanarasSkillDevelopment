import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-skilling-training',
  templateUrl: './skilling-training.component.html',
  styleUrls: ['./skilling-training.component.css']
})
export class SkillingTrainingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

}
