import { Component, OnInit } from '@angular/core';
// import {AuthenticationService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fakeData = [
    {
      id: '7Oj7RnUMlzGHKi9RD4T1',
      title: 'Lorem',
      desc: ' The Shiba Inu is the smallest',
      src: "https://material.angular.io/assets/img/examples/shiba2.jpg",

    },
    {
      id: '2',
      title: 'Lorem',
      desc: ' The Shiba Inu is the smallest ',
      src: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      id: '3',
      title: 'Lorem',
      desc: ' The Shiba Inu is the smallest ',
      src: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      id: '4',
      title: 'Lorem',
      desc: ' The Shiba Inu is the smallest',
      src: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      id: '5',
      title: 'Lorem',
      desc: ' The Shiba Inu is the smallest',
      src: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      id: '6',
      title: 'Lorem',
      desc: ' The Shiba Inu is the smallest',
      src: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    }
  ];
  constructor() {

  }

  ngOnInit(): void {
  }


}
