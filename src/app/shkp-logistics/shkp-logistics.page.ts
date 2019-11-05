import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

var getLogistics = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/getLogistic/";
var getRetailer = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/getReatiler/";

@Component({
  selector: 'app-shkp-logistics',
  templateUrl: './shkp-logistics.page.html',
  styleUrls: ['./shkp-logistics.page.scss'],
})
export class ShkpLogisticsPage implements OnInit {
  username:any;
  userIDFlag:any;
  Logistics:any;
  constructor( private http:HttpClient ) { 
    this.username =  localStorage.getItem('username');
    console.log(this.username);
    
    if(/^shkp/.test(this.username)){
      this.userIDFlag = "shkp";
      this.forShopkeepers();
    }
    else if(/^indus/.test(this.username)){
      this.userIDFlag = "indus";
      this.forIndustries()
  }
console.log(this.userIDFlag);

  }
  forShopkeepers(){
    this.http.get(getLogistics + localStorage.getItem('logistic_id')).subscribe( logiticsDetails => {
      // this.Logistics = logiticsDetails['items'];
      var self = logiticsDetails['items'];
      this.http.get(getRetailer + localStorage.getItem('username')).subscribe ( retailers => {
        self[0]['pickup_location'] =  retailers['items'][0]['address'];
        console.log(self);
        this.Logistics = self;
      })

      
    })
  }

  forIndustries(){
    this.http.get(getLogistics + localStorage.getItem('logistic_id')).subscribe( logiticsDetails => {
      this.Logistics = logiticsDetails['items'];
      console.log(logiticsDetails);
    })
  }


  ngOnInit() {
  }

}
