import React, { Component } from "react";
import axios from "axios";
import Image from "./components/Img";
// import Weather from "./components/Weather";
import Covid from "./components/Covid";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitAPI: false,
      searchQuery: " ",
    };
  }

  //this is the method that calls the API
  handleClick = (e) => {
    e.preventDefault();
    // I need to hit a API
    // API URL
    const URL = `https://us1.locationiq.com/v1/search.php?`;
    // make a call
    axios
      .get(URL, {
        params: {
          key: "pk.1f933372e4fbe974a7b262d30595f6c4",
          q: this.state.searchQuery,
          format: "json",
        },
      })
      // call API ------ retune a response
      // get a response//res is my okay
      .then((res) => {
        console.log(res.data[0]);
        // I made hitAPI true in the state if and only if I got a response
        this.setState({
          hitAPI: true,
          name: res.data[0].display_name,
          image: res.data[0].icon,
          locationLat: res.data[0].lat,
          locationLon: res.data[0].lon,
        });
        //check and see what is in the image state
        // console.log(this.state.image);
        //check and see what is in the name state
        // console.log(this.state.name);dot 
      })
      // parse response to json ///////////////////////////// Not something that I have to do!!!! //////////////////////////
      // use response.data
      // err handling // is the my bad one
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  change = (e) => {
    e.preventDefault(); // This is a function that prevents the default behavior
    // change is going to change the value of the searchQ
    // it got to call a setState
    this.setState({
      searchQuery: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1
          style={{
            padding: "10px 20px",
            textAlign: "left",
            color: "blue",
            fontSize: "30px",
          }}
        >
          {" "}
          {`The Location: ${this.state.name}`}
        </h1>
        {/* <h1>{this.state.err}</h1> */}
        <input style={inputStyle} onChange={this.change}></input>
        <button style={{ color: "blue" }} onClick={this.handleClick}>
          Explore!
        </button>
        {/* <h2
          style={{
            padding: "10px 20px",
            textAlign: "left",
            color: "blue",
            fontSize: "12.6666px",
          }}
        >{`The city name is ${this.state.name}, with a latitude of ${this.state.locationLat} and longitude of ${this.state.locationLon}. `}</h2> */}

        <Image
          // I need to pass the over some parameters for image and name
          image={this.state.image}
          name={this.state.name}
          locationLat={this.state.locationLat}
          locationLon={this.state.locationLon}
        />
        {/* <Weather
          name={this.state.name}
          locationLat={this.state.locationLat}
          locationLon={this.state.locationLon}
        /> */}
         <Covid
         name={this.state.name}
         locationLat={this.state.locationLat}
          locationLon={this.state.locationLon}
         />
        {/* I need to make a components to make my image */}
        {/* After doing i need  to pass the information the */}
      </div>
    );
  }
}

const inputStyle = {
  textAlign: "left",
  margin: "10px",
  // backgroundColor:"gray",
  border: "solid dotted blue",
};
