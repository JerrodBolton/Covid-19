import React, { Component } from "react";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';

export default class Weather extends Component {
  // the name of the location that was And put it into the searchQ was...
  // I need to add state\
  constructor(props) {
    super(props);
    this.state = {
      hitWetherAPI: false,
      weatherCityInfo: [],
      Forecast: [],
    };
  }

  // make something true
  handleWeatherClick = (e) => {
    e.preventDefault();
    // get the API URL
    // API URL
    const URL = `http://localhost:3001/weather`;
    // axios.get handled the using lat & lon
    axios
      .get(URL, {
        params: {
          name: this.props.name,
          lat: this.props.locationLat,
          lon: this.props.locationLon,
        },
      })
      // make call --- get json response
      // what will you do with that response
      // this is what you are doing with your result
      .then((res) => {
        // when I have so data back I want to some it in the t

        console.log(res.data); // get response from that call that you made
        // make a class use city name, lat, and lon
        //=======================================================================================
        // Create a class for `Forecast`, that has properties of `date` and `description`.
        //=======================================================================================

        // the plan:========================>
        // pash this data in a array
        // this.state.weatherCityInfo.push(res.data.data[0]);
        // means that's I have to get the date and description in the array
        // set the State for date, description, and hitWeather to false
        this.setState({
          hitWetherAPI: false,
          Forecast: res.data,
        });
        // Just want to check and see what's in the console for description
        // console.log(res.data.data[0].weather.description);
      })
      // Create a class for `Forecast`, that has properties of `date` and `description`.
      //   let dateDescription = this.state.weatherCityInfo.filter((res) => ({
      //     date:res.data.data[0].ob_time,
      //     description:res.data.data[0].weather.description,
      //   }))
      //   .then(()=>{
      //     this.state.Forecast.push(dateDescription)
      // })
      // I think that I need to ues a map() high order functions in oder to make a new array call Forecast
      .catch((err) => {
        // If I have any error than I would like to console.log them and get that data back about what was that err
        console.log(err);
        alert(err);
      });
  };
  // I'm going to make a new array with nothing but date, description
  // But I'm going to put this is a function that I will call when needed
  // makingANewArray = () => {
  //     const dateDescription = this.state.weatherCityInfo.filter((res) => ({
  //       date:res.data.data[0].ob_time,
  //       description:res.data.data[0].weather.description,
  //     }))

  //   .then(()=>{
  //       this.state.Forecast.push(dateDescription)
  //   })
  // }

  checkConsole = () => {
    // console.log(this.props.name);
    // console.log(this.props.locationLat, this.props.locationLon);
    console.log(this.state.weatherCityInfo);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleWeatherClick}>Weather</button>
        {/* <button onClick = {this.checkConsole}>checkConsole</button> */}
        {/* <button onClick = {this.makingANewArray}></button> */}
        {/* <Card // this is the style is for the box's
        style={{ width: '20rem' }}
        bg="dark"
        text="light"
        onClick={this.addLike} 
        >
        
          
            <Card.Body>
            <Card.Title>{this.state.Forecast.description}</Card.Title>
            <Card.Text>
             {this.state.Forecast}
            </Card.Text>
            <Card.Text>
                {this.state.description}
            </Card.Text>
            </Card.Body>
        </Card> */}
  


      </div>
    );
  }
}
