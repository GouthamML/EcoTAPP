import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
var readIndustryOrder = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/readIndustryOrder/"
@Component({
  selector: 'app-shkp-order-in-progress',
  templateUrl: './shkp-order-in-progress.page.html',
  styleUrls: ['./shkp-order-in-progress.page.scss'],
})
export class ShkpOrderInProgressPage implements OnInit {
  username: any;
  userIDFlag:any;
  orderInProgress:any;
  constructor(private http:HttpClient ) { 
    this.username =  localStorage.getItem('username');
    if(/^shkp/.test(this.username)){
      this.userIDFlag = "shkp";
    }
    else if(/^indus/.test(this.username)){
      this.userIDFlag = "indus";
      console.log("calling insudrties");
      this.forIndustries();
  }
  }

  forIndustries(){
    this.http.get(readIndustryOrder + this.username).subscribe( orderResult => {
      this.orderInProgress = orderResult['items'];
      console.log("inside industries\n");
      console.log(orderResult);
      localStorage.setItem('logistic_id', orderResult['items'][0]['logistics_id']);
    })
  }

  ngOnInit() {
  }

}
