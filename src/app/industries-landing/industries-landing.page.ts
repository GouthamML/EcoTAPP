import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries-landing',
  templateUrl: './industries-landing.page.html',
  styleUrls: ['./industries-landing.page.scss'],
})
export class IndustriesLandingPage implements OnInit {

  pages = [
    {
      title: 'Request',
      url: '/industries-landing/industries-request',
      icon: 'locate'
    },
    {
      title: 'Logistics',
      url: '/industries-landing/shkp-logistics',
      icon: 'bus'
    },
    {
      title: 'Orders',
      children:[
        {
          title: 'Orders InProgress',
          url: '/industries-landing/shkp-order-in-progress',
          icon: ''
        },
        {
          title: 'Order Completed',
          url: '/industries-landing/shkp-order-completed',
          icon: ''
        }
        
      ]
    },
    {
      title: 'Price',
      url: '/industries-landing/shkp-price',
      icon: ''
    },
    {
      title: 'Logout',
      url: '/home',
      icon: 'power'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
