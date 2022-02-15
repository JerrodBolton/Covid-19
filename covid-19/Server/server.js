
const express = require('express');

// require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/weather', getWeather)// this is the endpoint that the computer to think about /weather

async function getWeather (request, response){

const {lat,lon} = request.query;
const URL = `http://api.weatherbit.io/v2.0/forecast/daily`;// this is is the current

  try{
   const results = await axios.get(URL, {
       params:{
        key: "9150b8807aa14c3eac52f3c03282401d",
        lat: lat,
        lon: lon, 
        days: 7,
    },
   });
   const WeatherArray = results.data.data.map( day => new Forecast(day))
   response.status(200).send(WeatherArray);
  } catch(err) {
        // If I have any error than I would like to console.log them and get that data back about what was that err
        console.log(err);
       
  }
};

class Forecast {
    constructor(obj){
        this.date =  obj.datetime;
        this.description = obj.weather.description;
    }
}

app.get('*', notFound);

function notFound(request, response) {
  response.status(404).send('the page you are looking for is not there');
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
