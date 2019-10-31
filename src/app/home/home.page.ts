import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  credentials = {};

  constructor(private router: Router) {}

  login(){
    console.log(this.credentials);
    localStorage.setItem('username', this.credentials['username']);
    if(/^indi/.test(this.credentials['username'])){
      this.router.navigateByUrl('/landing-individual/locate-stores');
    }
    else if(/^shkp/.test(this.credentials['username'])){
      this.router.navigateByUrl('/shop-kpr-landing/shkp-add-plastic');
    }
    else if(/^indus/.test(this.credentials['username'])){
      this.router.navigateByUrl('/industries-landing/industries-request');
    }
    else if(/^log/.test(this.credentials['username'])){
      this.router.navigateByUrl('/logistics-lading/pickups');
    }
    this.credentials['username'] = "";
  }

}
