import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
const httpOptionsBC = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic cmF2aS5zcmVlLmthc2h5YXAua29tcGVsbGFAb3JhY2xlLmNvbTpPcmFjbGVAMTIzNDU=',
    'Access-Control-Allow-Origin': '*'
  })
};

var blockchainURLinvoke = "https://9bff3d41cb854a9087fabf6f8a445ca2.blockchain.ocp.oraclecloud.com/restproxy1/bcsgw/rest/v1/transaction/invocation";
var blockchainURLQuery = "https://9bff3d41cb854a9087fabf6f8a445ca2.blockchain.ocp.oraclecloud.com/restproxy1/bcsgw/rest/v1/transaction/query";

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.page.html',
  styleUrls: ['./redeem.page.scss'],
})





export class RedeemPage implements OnInit {
  channel: any;
  chaincode: any;
  chaincodeVer: any;
  API_URL: any;
  jsondata: any;
  API_inv_URL: any;
  qotesValue: any;
  res_data:any;
  argsArray:any;
  res_history_data =[];
  username:any;
  userIDFlag:any;
  redeem:string;
  constructor(private http: HttpClient) { 
    this.redeem = localStorage.getItem('reward');
    this.channel = 'default';
    this.chaincode = 'plastic16';
    this.chaincodeVer = 'v1';
  }

  historyIndi(){
    this.argsArray = [localStorage.getItem('username')];
    var shkpHistoryByid ={
      'channel': this.channel,
      'chaincode': this.chaincode,
      'method': 'history',
      'args': this.argsArray,
      'chaincodeVer': this.chaincodeVer
    }
    console.log('shkpHistoryByid\n');
    console.log(shkpHistoryByid);
    this.http.post(blockchainURLQuery,shkpHistoryByid, httpOptionsBC).subscribe( res => {
      console.log("History");
      

      console.log(res);
      this.res_history_data= JSON.parse(res['result']['payload']);
      console.log(this.res_history_data);
      
    })
  }

  ngOnInit() {
  }

}
