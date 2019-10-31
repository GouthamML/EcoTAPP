import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { getLocalePluralCase } from '@angular/common';
import { resolve } from 'url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
var completeOrder = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/completeOrder"
var getIndustry = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/getIndustry/";
var orderData = JSON.parse(localStorage.getItem('logisticsDetails'));
@Component({
  selector: 'app-drops',
  templateUrl: './drops.page.html',
  styleUrls: ['./drops.page.scss'],
})
export class DropsPage implements OnInit {
  shopkeeperArray:any;
  constructor(private http: HttpClient) {

    var shopKeeperDetails = {
      name:null,
      address:null,
      phone:null
    };
    
    this.http.get(getIndustry + orderData['items'][0]['idustry_id']).subscribe( res =>{
      // shopKeeperDetails.name = res['items'][0]['industry_name'];
      // shopKeeperDetails.address = res['items'][0]['industry_address'];
      // shopKeeperDetails.phone = res['items'][0]['industry_phone'];
      console.log(orderData);
      console.log(res);
      this.shopkeeperArray = res['items'];
      console.log(this.shopkeeperArray);
      // this.shopkeeperArray = this.shopkeeperArray[0]
    }
    )
   }

   dropOrder(){
     var payload = {
       orderid: orderData['items'][0]['orderid'],
       logistics_id: localStorage.getItem('username')
     }
     console.log(payload);
    this.http.put(completeOrder, payload, httpOptions).subscribe( res => {
      console.log("updated order table");
    })
   }

  ngOnInit() {
  }

}
