const request=require('request')
const geocode=(address,callback)=>{
    // the address pass through the function encodedURIcomponent(address) to not give error if the special character in addr
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibWFybWEtMTk5OCIsImEiOiJja2licDVwdG0wYTl4MnJvNWg0dXQ3N2RoIn0._lTxSO8Aial4aojOY7tt_A&limit=1'
request({url:url,json:true},(error,response)=>{
if(error){
    callback("Unable to connect to location",undefined)
}
else if(response.body.features.length==0){
             callback("Unable to find location. Try another search",undefined);
         }
         else{
            // const long=response.body.features[0].center[0]
            //          const lat=response.body.features[0].center[1]
                     callback(undefined,{
                         long:response.body.features[0].center[0],
                         lat:response.body.features[0].center[1],
                         location:response.body.features[0].place_name
                     })
         }
})

}

module.exports=geocode