
import React, { Component } from 'react';
import axios from "axios";
import Covid from "./Covid"
import Img from './Img';


export default class Mapping extends Component {
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
        // console.log(res.data[0]);
        // I made hitAPI true in the state if and only if I got a response
        this.setState({
          hitAPI: true,
          name: res.data[0].display_name,
          image: res.data[0].icon,
          locationLat: res.data[0].lat,
          locationLon: res.data[0].lon,
          abbr: this.abbrState(this.state.searchQuery), 
        });
        // console.log(this.state.abbr); // DeBug on if abbr is being set. 
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
        // alert(err);
      });
  };

 abbrState = (input) => {

//    console.log( "I am run Jerrod");
//    console.log(input); 
    
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
   

     for (let i = 0; i < states.length; i++) {

         if(input.toUpperCase() === states[i][0].toUpperCase()){
            // console.log(input.toUpperCase)
           return(states[i][1]);
         }
     }    

};

  change = (e) => {
    e.preventDefault(); // This is a function that prevents the default behavior
    // change is going to change the value of the searchQ
    // it got to call a setState
    this.setState({
      searchQuery: e.target.value
      
    });

    
  };
// style={styles.wholeMappingPage}
  render() {
    return (
      <div>
        <div className="wholeMappingPage">
          <div className="title">
            <h1>{this.state.name}</h1>
          </div>
          <nav className="ExplorerSearchBar">
            <a href={null}>
              <input
                onChange={this.change}
                placeholder="Search Map"
                style={{
                  zoom: "1.25",
                  color: "rgb(200, 132, 37)",
                }}
              ></input>
            </a>
            <a href={null}>
              <button
                onClick={this.handleClick}
                style={{
                  zoom: "1.25",
                  width: "65px",
                  height: "20px",
                  background: "white",
                  color: "rgb(200, 132, 37)",
                  border: "10px rgb(200, 132, 37)",
                  borderRadius: "2px",
                  font:"30px",
                }}
              >
                Explore!
              </button>
            </a>
          </nav>

          <div>
            <Img
              image={this.state.image}
              name={this.state.name}
              locationLat={this.state.locationLat}
              locationLon={this.state.locationLon}
            />
          </div>

          {/* I need to pass the over some parameters for image and name */}

          <div>
            <Covid
              name={this.state.name}
              searchQuery={this.state.searchQuery}
              abbr={this.state.abbr}
            />
          </div>
        </div>
      </div>
    );
  }
}

// const styles = {
//  wholeMappingPage:{
//   position: "absolute",
//   justifyContent: "center",
//   textAlign: "left",
//   margin: "10px",
//   left: "auto",
//   right: "auto",
//   border: "solid 40px dotted blue",
// }
// };





