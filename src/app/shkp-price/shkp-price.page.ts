import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};
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
  selector: 'app-shkp-price',
  templateUrl: './shkp-price.page.html',
  styleUrls: ['./shkp-price.page.scss'],
})
export class ShkpPricePage implements OnInit {
  channel: any;
  chaincode: any;
  chaincodeVer: any;
  API_URL: any;
  jsondata: any;
  API_inv_URL: any;
  qotesValue: any;
  constructor(private http: HttpClient) {
    this.channel = 'default';
    this.chaincode = 'plastic16';
    this.chaincodeVer = 'v1';

    var argsArray = [localStorage.getItem('username')];
    var shkpHistory = {
      'channel': this.channel,
      'chaincode': this.chaincode,
      'method': 'read',
      'args': argsArray,
      'chaincodeVer': this.chaincodeVer
    }
    
      http.post(blockchainURLQuery, shkpHistory, httpOptionsBC).subscribe( res => {
        console.log("History");
        console.log(res);
      })
  }
  

  ngOnInit() {
  }

}
