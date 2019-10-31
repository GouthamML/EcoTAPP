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

var getLogisticsInprogress = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/getLogisticsFromOrder/";
var getRetailerID = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/getReatiler/";

@Component({
  selector: 'app-pickups',
  templateUrl: './pickups.page.html',
  styleUrls: ['./pickups.page.scss'],
})
export class PickupsPage implements OnInit {
pickupDetails:any;

shopkeeperArray = []

addresses:[];
  constructor(private http: HttpClient) {
    var shopKeeperDetails = {
      name:null,
      address:null,
      phone:null
    };
    http.get(getLogisticsInprogress + localStorage.getItem('username')).subscribe(   logisticInprogress => {
      console.log(logisticInprogress);
      localStorage.setItem('logisticsDetails', JSON.stringify(logisticInprogress));
      this.pickupDetails = JSON.parse(logisticInprogress['items'][0]['retailers_id']);
      
      for(let i=0; i<this.pickupDetails.length; i++){
        this.getcalls(this.pickupDetails[i]).then(result=>{
          console.log(result);
          // shopKeeperDetails.name = result['items'][0]['retailername'];
          // shopKeeperDetails.phone = result['items'][0]['phone'];
          // shopKeeperDetails.address = result['items'][0]['address'];
          // console.log(shopKeeperDetails);
          // this.shopkeeperArray.push(shopKeeperDetails);

          // shopkeeperArray.nameresult['items'][0]['retailername'];
          // shopKeeperDetails.phone = result['items'][0]['phone'];
          // shopKeeperDetails.address = result['items'][0]['address'];
          // console.log(shopKeeperDetails);
          this.shopkeeperArray.push(result['items'][0]);

          // console.log(this.shopKeeperDetails);
      console.log(this.shopkeeperArray);
        })
        .catch(rej =>{

        });
        //console.log(getcall_data);
        // this,addresses.push()
      }
    })
   }

   async getcalls(i){
   
   return new Promise( (res, rej) =>{
      
    this.http.get(getRetailerID + i ).subscribe(result => {
      // console.log(result['items'][0]['address'])
       var res_data=result;
      // console.log(res_data);

      res(res_data);
      if(res_data == null){
        rej(res_data);
      }
      })
    
    });

//    this.http.get(getRetailerID + i ).subscribe(result => {
// console.log(result['items'][0]['address'])
//  res_data=result['items'][0]['address'];
// console.log(res_data);
// })
  }

  ngOnInit() {
  }

}
