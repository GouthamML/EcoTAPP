import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
const httpOptionsBC = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic cmF2aS5zcmVlLmthc2h5YXAua29tcGVsbGFAb3JhY2xlLmNvbTpPcmFjbGVAMTIzNDU='
  })
};
var blockchainURLinvoke = "https://9BFF3D41CB854A9087FABF6F8A445CA2.blockchain.ocp.oraclecloud.com:443/restproxy1/bcsgw/rest/v1/transaction/query";


@Component({
  selector: 'app-landing-individual',
  templateUrl: './landing-individual.page.html',
  styleUrls: ['./landing-individual.page.scss'],
})
export class LandingIndividualPage implements OnInit {
  redeemAmount: any;
  getIndividual: string;

  channel: any;
  chaincode: any;
  chaincodeVer: any;
  API_URL: any;
  jsondata: any;
  API_inv_URL: any;
  qotesValue:any;

  pages = [
    {
      title: 'Locate Stores',
      url: '/landing-individual/locate-stores',
      icon: 'locate'
    },
    {
      title: 'Redeem',
      url: '/landing-individual/redeem',
      icon: 'wallet'
    },
    {
      title: 'Report',
      url: '/landing-individual/report',
      icon: 'alert'
    },
    {
      title: 'Logout',
      url: '/home',
      icon: 'power'
    }
  ]

  constructor(private http: HttpClient) { 

    this.channel = 'default';
    this.chaincode = 'plastic16';
    this.chaincodeVer = 'v1';

    // this.getIndividual = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/getIndividual/" + localStorage.getItem('username');
    var argsArray = [localStorage.getItem('username')]
    var redeemBodyBC = {
      'channel': this.channel,
        'chaincode': this.chaincode,
        'method': 'read',
        'args': argsArray,
        'chaincodeVer': 'v1'
    }
    http.post(blockchainURLinvoke, redeemBodyBC, httpOptionsBC).subscribe( result => {
      // localStorage.setItem('reward', result['items'][0]['reward']);
      console.log(redeemBodyBC);
      console.log(result);
      this.redeemAmount = JSON.parse(result['result']['payload'])['reward'];
    })
  }

  ngOnInit() {
  }

}
