const request=require('request')
const weather=(lat,long,callback)=>{
    
    const wurl='http://api.weatherstack.com/current?access_key=e5fa570939c0e0be47a56068362c8029&query='+long+','+lat+'&units=f'   
request({url:wurl,json:true},(error,response)=>{
if(error){
    callback("Unable to connect to location",undefined)
}
else if(response.body.error){
             callback("Unable to find location",undefined);
         }
         else{
            const temp=response.body.current.temperature
                const precp=response.body.current.precip
                const cond=response.body.current.weather_descriptions[0]
                     callback(undefined,{
                        //  temp:response.body.current.temperature,
                        //   precp:response.body.current.precip,
                        //  cond:response.body.current.weather_descriptions[0],
                         data:' '+cond+'. It is currently '+temp+' degree out. There is '+precp+'% chance of rain.'
                     })
         }
})

}

module.exports=weather
