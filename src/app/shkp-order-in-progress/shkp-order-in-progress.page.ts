import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

var shopkeeperCode = {
  'shkp11' : 'ShopKeeper One',
  'shkp12' : 'ShopKeeper Two',
  'shkp13' : 'ShopKeeper Three'
}

var readIndustryOrder = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/readIndustryOrder/";
var getOrderbyOrderID = "https://mbhkhyle9gdcpvt-ecot.adb.us-ashburn-1.oraclecloudapps.com/ords/ecot/select/getOrderbyORderID/";
var tempObject = [];

@Component({
  selector: 'app-shkp-order-in-progress',
  templateUrl: './shkp-order-in-progress.page.html',
  styleUrls: ['./shkp-order-in-progress.page.scss'],
})
export class ShkpOrderInProgressPage implements OnInit {
  username: any;
  userIDFlag:any;
  orderInProgress:any;
  pickupDetails:any;
  arrayCheckFlag:any;
  shopkeeperArray=[];

  constructor(private http:HttpClient ) { 
    this.username =  localStorage.getItem('username');
    if(/^shkp/.test(this.username)){
      this.userIDFlag = "shkp";
      this.forShopKeepers()
    }
    else if(/^indus/.test(this.username)){
      this.userIDFlag = "indus";
      console.log("calling insudrties");
      this.forIndustries();
  }
  }

  forShopKeepers(){
    this.http.get(getOrderbyOrderID + localStorage.getItem('orderid')).subscribe( orderResult => {
      console.log("inside industries\n");
      console.log(orderResult);
      for(let i of orderResult['items']){
        
        if(i['orderstatus'] == 'inProgress'){ 
          tempObject = [];
          this.pickupDetails = null;
          this.arrayCheckFlag = 'shopkeepers';
          this.pickupDetails = JSON.parse(i['retailers_id']);
          i['retailername'] = []
          if( this.pickupDetails.includes(localStorage.getItem('username'))){
            i['retailername'].push(shopkeeperCode[localStorage.getItem('username')]);
          }
          // for(let j=0; j<this.pickupDetails.length; j++){
          //   i['retailername'].push(shopkeeperCode[this.pickupDetails[j]]);
          //   // this.getcalls(this.pickupDetails[j]).then(result=>{
          //   //   console.log("inside for loop\n")
          //   //   console.log(result);
          //   //   tempObject.push(result['items'][0]['retailername']);
          //   //   console.log("temp Object\n");
          //   //   console.log(tempObject);
             
          //   //   // console.log(this.shopkeeperArray);
          //   // });
          // //   this.formArray(tempObject).then( rsult1 =>{ 
          // //     console.log("done from second promise\n")
          // // });
            
          
          // }
          console.log("i\n");
          console.log(i);
          this.shopkeeperArray.push(i);
          // this.shopkeeperArray = orderResult;
          // this.shopkeeperArray.push(tempObject);
          // console.log("shopkeeper Array");
          // console.log(this.shopkeeperArray);
          // // i['retailers_id'] = this.pickupDetails;
          // this.orderCompleted.push(i);
          // console.log(this.orderCompleted);
        }
      }
      // localStorage.setItem('logistic_id', orderResult['items'][0]['logistics_id']);
      console.log(this.shopkeeperArray);
    })
    
  }

  forIndustries(){
    this.http.get(readIndustryOrder + this.username).subscribe( orderResult => {
      this.orderInProgress = orderResult['items'];
      console.log("inside industries\n");
      console.log(orderResult);
      for(let i of orderResult['items']){
        
        if(i['orderstatus'] == 'inProgress'){
          tempObject = [];
          this.pickupDetails = null;
          this.arrayCheckFlag = 'industries';
          this.pickupDetails = JSON.parse(i['retailers_id']);
          i['retailername'] = []
          for(let j=0; j<this.pickupDetails.length; j++){
            i['retailername'].push(shopkeeperCode[this.pickupDetails[j]]);
            // this.getcalls(this.pickupDetails[j]).then(result=>{
            //   console.log("inside for loop\n")
            //   console.log(result);
            //   tempObject.push(result['items'][0]['retailername']);
            //   console.log("temp Object\n");
            //   console.log(tempObject);
             
            //   // console.log(this.shopkeeperArray);
            // });
          //   this.formArray(tempObject).then( rsult1 =>{ 
          //     console.log("done from second promise\n")
          // });
            
          
          }
          console.log("i\n");
          console.log(i);
          this.shopkeeperArray.push(i);
          // this.shopkeeperArray = orderResult;
          // this.shopkeeperArray.push(tempObject);
          // console.log("shopkeeper Array");
          // console.log(this.shopkeeperArray);
          // // i['retailers_id'] = this.pickupDetails;
          // this.orderCompleted.push(i);
          // console.log(this.orderCompleted);
        }
      }
      // localStorage.setItem('logistic_id', orderResult['items'][0]['logistics_id']);
    })
  }

  ngOnInit() {
  }

}
