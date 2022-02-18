const express = require("express");

// require('dotenv').config();
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8080;

// app.get('/weather', getWeather)// this is the endpoint that the computer to think about /weather
app.get("/covid/:name", getCovid); //this is going to get the info that is in the covid-API

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
        next(err);
        console.log(err);
        console.log("This is the Backend error");

  }
};

class Forecast {
  constructor(obj) {
    this.date = obj.dateTime;
    this.description = obj.weather.description;
  }
}
// ======================================================================================================
// this is just some notes that I am using 
// ======================================================================================================
// let options = {
//   method: 'GET',
//   url: 'https://covid-19-data.p.rapidapi.com/report/country/name',
//   params: {name: name , date: dateTime,
//   headers: {
//     'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
//     'x-rapidapi-key': '06b1bd4a25msh8a5db757aecb34ap15b179jsn7cb5432a2942'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

async function getCovid(request, response) {

  let name = request.params.name; 
  console.log(name);
  
  const Url = `https://api.covidtracking.com/v1/states/${name}/current.json?`;
//  //this is just a way to get the date in the code.
//   let currentDate = new Date();
//   let dateTime =
//     currentDate.getFullYear() +
//     "/" +
//     currentDate.getMonth() +
//     "/" +
//     currentDate.getDay();
 await axios.get(Url, 
// {
//  params: {
//     states:name, 
//  }
// }
).then((res) => {
 console.log(res.data)
 response.status(200).send(res.data);// this is what I am sending back to the frontend 

}).catch((err) => {
 console.log(err)
})


}
// getCovid();

app.get("*", notFound);

function notFound(request, response) {
  response.status(404).send("Sorry");
}

app.listen(PORT, () =>{ console.log(`listening on ${PORT}`)});
