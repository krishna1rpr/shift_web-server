const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoia3Jpc2huYTFycHIiLCJhIjoiY2tiZWsxODhsMG1lNzJ6bDl1NnEyMXlxbyJ9.8AQRHr367cVElAm5VNAnRA'

    request({url: url,json: true }, (error,response) => {
        if(error){
            callback("Unable to connect to location sevices", undefined)
        } else if(response.body.features.length === 0){
            callback("Unable to find location. Try another search", undefined)
        } else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name,
            })
        }
    })

}




// geocode("Philadelphia New York", (error,data) =>{
//     console.log("Error: ",error)
//     console.log("data: ",data)
// })


module.exports = geocode;