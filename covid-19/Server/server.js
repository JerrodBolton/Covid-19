
const express = require('express');

// require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

// app.get('/weather', getWeather)// this is the endpoint that the computer to think about /weather
app.get('/covid', getCovid)//this is going to get the info that is in the covid-API

// async function getWeather (request, response){

// const {lat,lon} = request.query;
// const URL = `http://api.weatherbit.io/v2.0/forecast/daily`;// this is is the current

//   try{
//    const results = await axios.get(URL, {
//        params:{
//         key: "9150b8807aa14c3eac52f3c03282401d",
//         lat: lat,
//         lon: lon, 
//         days: 7,
//     },
//    });
//    const WeatherArray = results.data.data.map( day => new Forecast(day))
//    response.status(200).send(WeatherArray);
//   } catch(err) {
//         // If I have any error than I would like to console.log them and get that data back about what was that err
//         console.log(err);
       
//   }
// };

async function getCovid(request, response){ 
  const {latitude,longitude} = request.query;
  let name = name;

// const Url = `https://api.covidtracking.com/v1/${name}/ca/current.json`

  try{
    const InfoCovid= await axios.get(Url ,
    // {
    //     params:{ 
    //     name: name, 
    //     latitude:latitude,   
    //     longitude:longitude, 
    //     // date: '2020-04-01',

    //     },  
    //     headers: {
    //     'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    //     'x-rapidapi-key': '06b1bd4a25msh8a5db757aecb34ap15b179jsn7cb5432a2942'
    //     }
    // }
    );
   response.status(200).send(InfoCovid);
  
  }
catch(err){
    //this is going to log a error that I have   
     console.log(err);
  }

};

class Forecast {
    constructor(obj){
        this.date =  obj.dateTime;
        this.description = obj.weather.description;
    }
}
















app.get('*', notFound);

function notFound(request, response) {
  response.status(404).send('the page you are looking for is not there');
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
