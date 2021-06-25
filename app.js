//Weather Stack
const request=require('request')
const geocode=require('./utils/geocode')
const weather_response=require('./utils/weather_res')


geocode('Boston',(error,data)=>{

// console.log('error',error);
// console.log('data',data);

if(error){
return console.log(error);
}
weather_response(data.lat,data.long,(error,forcast_data)=>{
    if(error){
        return console.log(error);
    }
console.log(data.location);
console.log(forcast_data);
     
    // console.log('error',error);
    // console.log('data',data);
})
})

