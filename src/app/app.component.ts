import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//API Docs
//Doc: http://www.postalpincode.in/
//api call: https://api.postalpincode.in/pincode/<pin code> -> https://api.postalpincode.in/pincode/560045
//Response
// [
//   {
//      "Message":"Number of pincode(s) found:2",
//      "Status":"Success",
//      "PostOffice":[
//         {
//            "Name":"Arabic College",
//            "Description":null,
//            "BranchType":"Sub Post Office",
//            "DeliveryStatus":"Delivery",
//            "Circle":"Karnataka",
//            "District":"Bangalore",
//            "Division":"Bangalore East",
//            "Region":"Bangalore HQ",
//            "Block":"Bangalore North",
//            "State":"Karnataka",
//            "Country":"India",
//            "Pincode":"560045"
//         },
//         {
//            "Name":"Venkateshapura",
//            "Description":null,
//            "BranchType":"Sub Post Office",
//            "DeliveryStatus":"Non-Delivery",
//            "Circle":"Karnataka",
//            "District":"Bangalore",
//            "Division":"Bangalore East",
//            "Region":"Bangalore HQ",
//            "Block":"Bangalore North",
//            "State":"Karnataka",
//            "Country":"India",
//            "Pincode":"560045"
//         }
//      ]
//   }
// ]



export class AppComponent{
  
  title = 'test-angular-project';
  execute(zipCode: any){
    let zipValue = new String(zipCode.target.value);
    console.log('Test Execute'+zipValue);

    if(zipValue!= null)
    {
    if(zipValue.length === 6)
    {

      axios.request({
        url: `https://api.postalpincode.in/pincode/${zipCode.target.value}`
      }).then(response => {
        console.log(response.data);
        var dataJson = response.data;
        if(response.data[0] != null)
        {
          if(response.data[0]["PostOffice"].length >0)
          {
            var pOffice1 = response.data[0]["PostOffice"][0];
            console.log(pOffice1["Region"]);
            //Set Data
            (<HTMLInputElement>document.getElementById("name")).value=pOffice1["Name"];
            (<HTMLInputElement>document.getElementById("devision")).value=pOffice1["Division"];
            (<HTMLInputElement>document.getElementById("region")).value=pOffice1["Region"];
            (<HTMLInputElement>document.getElementById("state")).value=pOffice1["State"];
            (<HTMLInputElement>document.getElementById("country")).value=pOffice1["Country"];
          }else{
            alert("No Data available");
          }
        }
        
      })


    }else{
      alert("Not an Indian Zip Code");
    }
  }
    

  }
}


