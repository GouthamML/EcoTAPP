import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const getRetailerData = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/retailerGetData";

@Component({
  selector: 'app-locate-stores',
  templateUrl: './locate-stores.page.html',
  styleUrls: ['./locate-stores.page.scss'],
})
export class LocateStoresPage implements OnInit {

  retailers:any;
  constructor(private http: HttpClient) { 
    http.get(getRetailerData).subscribe(result =>{
      console.log(result);
      this.retailers = result['items'];
      localStorage.setItem('logisticsID', result['items']['logistics_id']);
      console.log(JSON.stringify(this.retailers));
    });
  }



  ngOnInit() {
  }

}
