import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistics-lading',
  templateUrl: './logistics-lading.page.html',
  styleUrls: ['./logistics-lading.page.scss'],
})
export class LogisticsLadingPage implements OnInit {

  pages = [
    {
    title: 'Pickup Location',
    url: '/logistics-lading/pickups',
    icon: 'locate'
  },
  {
    title: 'Drop Location',
    url: '/logistics-lading/drops',
    icon: 'locate'
  },
  {
    title: 'Logout',
    url: '/home',
    icon: 'power'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
