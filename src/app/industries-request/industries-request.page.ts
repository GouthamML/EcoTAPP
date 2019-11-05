import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page'
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};
const httpOptionsBC= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic cmF2aS5zcmVlLmthc2h5YXAua29tcGVsbGFAb3JhY2xlLmNvbTpPcmFjbGVAMTIzNDU=',
    'Access-Control-Allow-Origin': '*'
  })
};

var tempArrayGlobal = [];
var getRetailerID = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/getReatiler/";

@Component({
  selector: 'app-industries-request',
  templateUrl: './industries-request.page.html',
  styleUrls: ['./industries-request.page.scss'],
})
export class IndustriesRequestPage implements OnInit {
  channel: any;
  chaincode: any;
  chaincodeVer: any;
  API_URL: any;
  jsondata: any;
  API_inv_URL: any;
  quotesValue:any;

  data = {}
  constructor(public modalController: ModalController, private http: HttpClient, public toastController: ToastController, public loadingController: LoadingController) { 
    this.channel = 'default';
    this.chaincode = 'plastic16';
    this.chaincodeVer = 'v1';
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Creating Order...',
      duration: 5000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    

    console.log('Loading dismissed!');
  } 

  async ecotMainFunction() {
    var readRetailer = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/retailerGetData";
    var readLogistics = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/logisticsGetData";
    
    var getIndustry = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/getIndustry/";
    var createOrder = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/createOrder";
    var updatePlasticRetailerURL = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/updateRetailerPlastic";
    var blockchainURLinvoke = "https://9bff3d41cb854a9087fabf6f8a445ca2.blockchain.ocp.oraclecloud.com/restproxy1/bcsgw/rest/v1/transaction/invocation";
    var blockchainURLQuery = "https://9bff3d41cb854a9087fabf6f8a445ca2.blockchain.ocp.oraclecloud.com/restproxy1/bcsgw/rest/v1/transaction/query";
    var plastics = {
      ids: [],
      names: [],
      contribution : [],
      kgs: 0
    }
    console.log("indide ecotmain")
    
    this.http.get(readRetailer).subscribe(retailerData => {
      plastics.kgs = Number(retailerData['items'][0]['plasticamount']);
      var requested = Number(this.data['amount']);
      for (var i = 0; i < retailerData['items'].length; i++) {
        var shkpid = i;

        if (retailerData['items'][shkpid]['plasticamount'] < requested) {

          requested = requested - Number(retailerData['items'][shkpid]['plasticamount']);

          plastics.ids.push(retailerData['items'][shkpid]['retailerid']);
          plastics.names.push(retailerData['items'][shkpid]['retailername'])
          plastics.contribution.push(retailerData['items'][shkpid]['plasticamount'])
          var params = {
            plasticamount: "0",
            retailerid: retailerData['items'][shkpid]['retailerid']
          };
          this.http.put(updatePlasticRetailerURL, params, httpOptions).subscribe(result => {
            console.log("updated with", params);
          })
          shkpid = i + 1;
          // plastics.kgs =  plastics.kgs + Number(retailerData['items'][i+1]['plasticamount']);
        }
        else {
          var plasticUpdate = Number(retailerData['items'][shkpid]['plasticamount']) - requested;

          plastics.ids.push(retailerData['items'][shkpid]['retailerid']);
          plastics.names.push(retailerData['items'][shkpid]['retailername'])
          plastics.contribution.push(requested.toString())

          // var plasticUpdate = plastics.kgs-Number(this.data['amount']);
          plastics.kgs = Number(this.data['amount']);
          // var updatePlasticRetailerURL = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/updateRetailerPlastic";
          var params1 = {
            plasticamount: plasticUpdate.toString(),
            retailerid: plastics.ids[plastics.ids.length - 1]
          };
          this.http.put(updatePlasticRetailerURL, params1, httpOptions).subscribe(result => {
            console.log("updated with", params);
          })
          requested = 0;
        }
      }

      if (requested != 0) {
        console.log("insufficient supplies");
      }

      var orderCreatePayload = {
        orderID: Math.floor(Math.random() * 10000).toString(),
        industryName: null,
        retailerNames: null,
        logisticsName: null,
        orderStatus: 'inProgress',
        requestedPlastic: this.data['amount'],
        idustry_id: localStorage.getItem('username'),
        retailers_id: JSON.stringify(plastics.ids),
        logistics_id: null
      }
      
      //setting ORDERID in localstorage for shopkeeper order reference
      localStorage.setItem('orderid', orderCreatePayload.orderID);

      this.http.get(getIndustry + localStorage.getItem('username')).subscribe(idustryResult => {
        console.log("industry\n"+idustryResult['items'][0]['industry_name']);
        orderCreatePayload.industryName = idustryResult['items'][0]['industry_name'];
        console.log(idustryResult);
        
        
        this.http.get(readLogistics).subscribe(logistics=>  {
          let randomLogNumber = Math.floor(Math.random() * 10).toString();
          orderCreatePayload.logisticsName = logistics['items'][randomLogNumber]['logistics_name'];
          orderCreatePayload.logistics_id = logistics['items'][randomLogNumber]['logistics_id'];
          console.log("logisticsName\n"+logistics);
          localStorage.setItem('logistic_id', orderCreatePayload.logistics_id);
          // this.tempArrayGenerator(0)
          
          orderCreatePayload.retailerNames = JSON.stringify(plastics.names);
          console.log(orderCreatePayload);
          
          
          this.http.post(createOrder, orderCreatePayload, httpOptions).subscribe(orderCreate => {
            console.log("ordercreated successfully");
           
            var argsArray = [localStorage.getItem('username'), this.data['amount'], orderCreatePayload.orderID]
            var bcBody = {
              'channel': this.channel,
              'chaincode': this.chaincode,
              'method': 'industryRequirement',
              'args': argsArray,
              'chaincodeVer': this.chaincodeVer
            }
            console.log(bcBody);
            this.http.post(blockchainURLinvoke, bcBody, httpOptionsBC).subscribe( bcResponse => {
              console.log("pushed to blockchain successfully\n");
              console.log(bcResponse);
              argsArray = [orderCreatePayload.orderID+'quote'];
              
              var bcBodyQuotes = {
                'channel': this.channel,
                'chaincode': this.chaincode,
                'method': 'read',
                'args': argsArray,
                'chaincodeVer': this.chaincodeVer
              }

              this.http.post(blockchainURLQuery, bcBodyQuotes, httpOptionsBC ).subscribe( bcresponse => {
                this.quotesValue = JSON.parse(bcresponse['result']['payload'])
                console.log(this.quotesValue);
                console.log("pushed to second blockchain successfully\n");

                argsArray = [orderCreatePayload.orderID, localStorage.getItem('username'), this.data['amount']];
                for(let id=0; id < plastics.ids.length; id++){
                  argsArray.push(plastics.ids[id]);
                  argsArray.push(plastics.contribution[id])
                }

                var bcinitPlastic = {
                  'channel': this.channel,
                  'chaincode': this.chaincode,
                  'method': 'initplastic',
                  'args': argsArray,
                  'chaincodeVer': this.chaincodeVer
                }
                console.log('initPlasticBody\n');
                console.log(bcinitPlastic);
                this.http.post(blockchainURLinvoke, bcinitPlastic, httpOptionsBC).subscribe( initPlasticResponse => {
                  console.log("init plastic successfull");
                  console.log(initPlasticResponse);
                  argsArray = [orderCreatePayload.orderID];
                  var shopkeeperamountbodyBC = {
                    'channel': this.channel,
                  'chaincode': this.chaincode,
                  'method': 'shopkeeperAmount',
                  'args': argsArray,
                  'chaincodeVer': this.chaincodeVer
                  }
                  this.http.post(blockchainURLinvoke, shopkeeperamountbodyBC, httpOptionsBC).subscribe( res => {
                    console.log("Spliting of shopkeeper  amount done\n");
                  })
                })



              }

              )
            })

          })
        })
      })





      

      


    })
  }

   tempArrayGenerator(i){
    var returnVar=null;
    this.http.get(getRetailerID+i).subscribe( retailerResult => {
       returnVar = retailerResult['items'][0]['retailername']
       console.log(returnVar);
       return {r_name:returnVar};

    })
    // console.log('HHH')

  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage
    });
    return await modal.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Request was updated successfully!',
      duration: 2000
    });
    toast.present();
  }

  requestPlastic() {
    var reqPlastic = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/updateRequest";
    var payload = {
      'industryID': localStorage.getItem('username'),
      'PLASTIC_NEEDED': this.data['amount']
    }
    this.presentLoading();
    this.http.put(reqPlastic, payload, httpOptions).subscribe(result => {
      
      console.log("updated industry table\n");
      this.presentToast();
      this.ecotMainFunction();

    })
  }

  ngOnInit() {
  }

}
