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
    'Authorization': 'Basic cmF2aS5zcmVlLmthc2h5YXAua29tcGVsbGFAb3JhY2xlLmNvbTpPcmFjbGVAMTIzNDU=',
    'Access-Control-Allow-Origin': '*'
  })
};
var blockchainURLinvoke = "https://9BFF3D41CB854A9087FABF6F8A445CA2.blockchain.ocp.oraclecloud.com:443/restproxy1/bcsgw/rest/v1/transaction/invocation";

@Component({
  selector: 'app-shkp-add-plastic',
  templateUrl: './shkp-add-plastic.page.html',
  styleUrls: ['./shkp-add-plastic.page.scss'],
})


export class ShkpAddPlasticPage implements OnInit {
  channel: any;
  chaincode: any;
  chaincodeVer: any;
  API_URL: any;
  jsondata: any;
  API_inv_URL: any;
  qotesValue:any;
  data = {};
  addPlasticURL: string;
  constructor(private http: HttpClient, public toastController: ToastController) { 
    this.channel = 'default';
    this.chaincode = 'plastic16';
    this.chaincodeVer = 'v1';
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Request was updated successfully!',
      duration: 2000
    });
    toast.present();
  }

  addPlastic() {

    var getIndURL = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/getIndividual/" + this.data['userID'];
    var putURL = 'https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/addPlasctic/';
    this.http.get(getIndURL).subscribe(indDATA => {
      if (indDATA['items'][0]['plastic_submitted'] == "NaN") {
        var plasticAmount = Number(this.data['amount']);
      }
      else {
        var plasticAmount = Number(indDATA['items'][0]['plastic_submitted']) + Number(this.data['amount']);
      }
      console.log(plasticAmount);

      var params = {
        'userID': this.data['userID'],
        'plascticAmount': plasticAmount.toString(),
        'shkpID': localStorage.getItem('username')
      };

      this.http.put(putURL, params, httpOptions).subscribe(result => {
        console.log("updated\n")
      })
      var argsArray = [this.data['userID'],this.data['amount']]
      var addplasticbcPayload = {
        'channel': this.channel,
        'chaincode': this.chaincode,
        'method': 'customerReward',
        'args': argsArray,
        'chaincodeVer': 'v1'
      }
      this.presentToast()

      this.http.post(blockchainURLinvoke, addplasticbcPayload, httpOptionsBC).subscribe( resAddPlastic => {
        console.log("Added");
        console.log(resAddPlastic);
      })

    })
  }

  ngOnInit() {
  }

}
