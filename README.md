# Angular-zipcode-to-zipcode-details
Simple app demonstrate how to retrieve Zip Code Details from an Indian Zip code with API. <br><b>
![Result gif](https://github.com/sarangsmk/angular-zipcode-to-details/blob/master/Result%20gif/Angular%20Zip%20API%20Test.gif)

### API Used <br>
  http://www.postalpincode.in/ <br>
usage: https://api.postalpincode.in/pincode/560045

### API Response <br>
```json
[
   {
      "Message":"Number of pincode(s) found:2",
      "Status":"Success",
      "PostOffice":[
         {
            "Name":"Arabic College",
            "Description":null,
            "BranchType":"Sub Post Office",
            "DeliveryStatus":"Delivery",
            "Circle":"Karnataka",
            "District":"Bangalore",
            "Division":"Bangalore East",
            "Region":"Bangalore HQ",
            "Block":"Bangalore North",
            "State":"Karnataka",
            "Country":"India",
            "Pincode":"560045"
         },
         {
            "Name":"Venkateshapura",
            "Description":null,
            "BranchType":"Sub Post Office",
            "DeliveryStatus":"Non-Delivery",
            "Circle":"Karnataka",
            "District":"Bangalore",
            "Division":"Bangalore East",
            "Region":"Bangalore HQ",
            "Block":"Bangalore North",
            "State":"Karnataka",
            "Country":"India",
            "Pincode":"560045"
         }
      ]
   }
]
```
  
  ### Sample/Basic/idea Code Snippet
  ```ts
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
  ```
