import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shkp-order-completed',
  templateUrl: './shkp-order-completed.page.html',
  styleUrls: ['./shkp-order-completed.page.scss'],
})
export class ShkpOrderCompletedPage implements OnInit {
username:any;
  constructor() {
    this.username =  localStorage.getItem('username');
   }

  ngOnInit() {
  }

}
