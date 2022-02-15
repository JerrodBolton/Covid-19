import React, { Component } from "react";
import axios from "axios";

export default class Covid extends Component {
// I want to make some state c
  constructor(props) {
    super(props);
    this.state = {
      hitAPI: false,
   
    };
  }




  //this is just a check to see what info I have in the Covid-19 file
  checkInfo = () => {
    console.log(this.props.name);
  };
  //  I want to get the info about about covid-19
  getInfoAboutCovid_19 = (e) => {
    e.preventDefault();
    // So I want to add the endpoint that I want to listen on which is  /covid

    const URL = `http://localhost:3001/covid`;

    axios
      .get(URL, {
        params: {
          name: this.props.name, 
        //   latitude: this.props.locationLat,
        //   longitude: this.props.locationLon,
        // this is okay everything here is good!!
        },
      })
      .then((res) => {
        console.log(res.date);
        // this is just some debug that I want to see if everything is moving correctly
        this.setState({
        hitAPI:true
        
        })
      })
      .catch((err) => {
        // this will console log my err if I have any
        console.log(err);
        alert(err);
      });
  };

  render() {
    return <div>
    <button onClick={this.getInfoAboutCovid_19}> Covid</button>
    
    
    
    
    </div>;
  }
}
