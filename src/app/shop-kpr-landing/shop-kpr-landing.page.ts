import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-kpr-landing',
  templateUrl: './shop-kpr-landing.page.html',
  styleUrls: ['./shop-kpr-landing.page.scss'],
})
export class ShopKprLandingPage implements OnInit {

  pages = [
    {
      title: 'Add Plastic',
      url: '/shop-kpr-landing/shkp-add-plastic',
      icon: 'plus'
    },
    {
      title: 'Logistics',
      url: '/shop-kpr-landing/shkp-logistics',
      icon: 'bus'
    },
    {
      title: 'Orders',
      children:[
        {
          title: 'Orders InProgress',
          url: '/shop-kpr-landing/shkp-order-in-progress',
          icon: ''
        },
        {
          title: 'Order Completed',
          url: '/shop-kpr-landing/shkp-order-completed',
          icon: ''
        }
        
      ]
    },
    {
      title: 'Price',
      url: '/shop-kpr-landing/shkp-price',
      icon: 'dollar'
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
