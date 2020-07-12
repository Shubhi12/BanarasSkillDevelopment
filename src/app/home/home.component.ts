import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  members: {content: string, url: string}[] = [
    {content: 'To enable ‘Learning’ bring a visible & positive impact to individuals & organizations. To be the reliable ‘Solution Providers’', url: '../../assets/image/1.png'},
    {content: 'Aspirants enrolled under this training would be able to understand and learn knowledge of various technology trends and processes as well as have updated knowledge about database management systems and IT initiatives. ', url: '../../assets/image/2.png'},
    {content: 'Banaras Skill Development India Private Limited company, is present in EDUCATION & TRAINING – Vocational Training, Job-oriented courses, Skill Development Training', url: '../../assets/image/3.png'},
    {content: 'On the back of its rich experience in IT Education & Training and association with leading companies and organizations, Banaras Skill has accumulated vast experience & expertise in this field.', url: '../../assets/image/4.png'}
  ];

  constructor(private router :Router) { }

  ngOnInit() {
    console.log("slo");
  }
  navigateTo(route)
  {
    console.log(route);
   switch(route)
   {
    case 0: this.router.navigate(['/visionandmission']);
            break;
    case 1 : this.router.navigate(['/skillandtrain'])
            break;
    case 2 : this.router.navigate(['/about'])
            break;
    case 3 : this.router.navigate(['/consultancy'])
              break;
   } 
  }
}
