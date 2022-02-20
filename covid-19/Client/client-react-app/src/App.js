import React, { Component } from "react";
import axios from "axios";
import Image from "./components/Img";
// import Weather from "./components/Weather";
// import Covid from "./components/Covid";
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import DropdownItem from "react-bootstrap/esm/DropdownItem";








export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitAPI: false,
      searchQuery: " ",
      abbr:[],
      spellOut: [], 
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
        // check and see what is in the name state
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

 abbrState = (input, to) => {
   input.toLowerCase;
    
    
   let states = [
      ["Arizona", "az"],
      ["Alabama", "al"],
      ["Alaska", "ak"],
      ["Arkansas", "ar"],
      ["California", "ca"],
      ["Colorado", "co"],
      ["Connecticut", "ct"],
      ["Delaware", "de"],
      ["Florida", "fl"],
      ["Georgia", "ga"],
      ["Hawaii", "hi"],
      ["Idaho", "id"],
      ["Illinois", "il"],
      ["Indiana", "in"],
      ["Iowa", "ia"],
      ["Kansas", "ks"],
      ["Kentucky", "ky"],
      ["Louisiana", "la"],
      ["Maine", "me"],
      ["Maryland", "md"],
      ["Massachusetts", "ma"],
      ["Michigan", "mi"],
      ["Minnesota", "mn"],
      ["Mississippi", "ms"],
      ["Missouri", "mo"],
      ["Montana", "mt"],
      ["Nebraska", "ne"],
      ["Nevada", "nv"],
      ["New Hampshire", "nh"],
      ["New Jersey", "nj"],
      ["New Mexico", "nm"],
      ["New York", "ny"],
      ["North Carolina", "nc"],
      ["North Dakota", "nd"],
      ["Ohio", "oh"],
      ["Oklahoma", "ok"],
      ["Oregon", "or"],
      ["Pennsylvania", "pa"],
      ["Rhode Island", "ri"],
      ["South Carolina", "sc"],
      ["South Dakota", "sd"],
      ["Tennessee", "tn"],
      ["Texas", "tx"],
      ["Utah", "ut"],
      ["Vermont", "vt"],
      ["Virginia", "va"],
      ["Washington", "wa"],
      ["West Virginia", "wv"],
      ["Wisconsin", "wi"],
      ["Wyoming", "wy"],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        
        for(let i = 0; i < states.length; i++){
            if(states[i][0].toLowerCase === input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(let i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
}

  change = (e) => {
    e.preventDefault(); // This is a function that prevents the default behavior
    // change is going to change the value of the searchQ
    // it got to call a setState
    this.setState({
      searchQuery: e.target.value
    });
    

    this.abbrState(this.state.searchQuery)
    // console.log("I am run Jerrod");//Debug on the if this function  is running


    // console.log(input); // this is just to see everything flow really good
    // for (let index = 0; index < states.length; index++) {
    //     const element1 = states[index][0];
    //     const element2 = states[index][1];
    //     // console.log(element) 
    //     this.state.spellOut.push(element1);
    //     this.state.abbr.push(element2);
    // }
    // for (let index = 0; index < this.state.spellOut.length; index++) {
    //      if(this.state.searchQuery === index){
    //        this.setState({ 
    //         searchQuery: "Done", 
    //        })
    //      }
    // }
    
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
          {`The Location: ${this.state.name}`}
        </h1>

        <input style={inputStyle} onChange={this.change} placeholder="Prefix States"></input>
        {/* <select onClick={this.change} onClick={this.abbrState}>
            <option value="ms"> Mississippi</option>
            <option value="tx"> Texas </option>
            <option value={this.state.abbr}>{this.state.spellOut}</option>
        </select> */}
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
        {/* <button onClick={this.abbrState}>abbrState</button> */}
        {/* <Covid
          name={this.state.name}
          locationLat={this.state.locationLat}
          locationLon={this.state.locationLon}
          searchQuery={this.state.searchQuery}
        /> */}
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
