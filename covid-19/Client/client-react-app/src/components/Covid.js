import React, { Component } from "react";
import axios from "axios";


export default class Covid extends Component {
// I want to make some state c
  constructor(props) {
    super(props);
    this.state = {
      hitAPI: false,
      name:this.props.name,
      sq:this.props.searchQuery,
      
    };
  }

  //this is just a check to see what info I have in the Covid-19 file
  checkInfo = () => {
    // console.log(this.props.name);
  };
  //  I want to get the info about about covid-19
  getInfoAboutCovid_19 = async (e) => {
    e.preventDefault();
    // So I want to add the endpoint that I want to listen on which is  /covid
    const URL = `https://api.covidtracking.com/v1/states/${this.props.abbr}/current.json?`; //API URL
    console.log(URL)
   await axios
      .get(URL
    // {
    //     params: {
    //       name: this.props.name 
    //     //   latitude: this.props.locationLat,
    //     //   longitude: this.props.locationLon,
    //     // this is okay everything here is good!!
    //     },
    //   }
    )
      .then((res) => {
        console.log(res.data.death);
        console.log(res.data.positive);


        // this is just some debug that I want to see if everything is moving correctly
        this.setState({
        hitAPI:true,
        positive:res.data.positive, 
        death:res.data.death,
        date:res.data.lastUpdateEt,
        positiveI:res.data.positiveIncrease

        })
      })
      .catch((err) => {
        // this will console log my err if I have any

        console.log("This is the Frontend error");
        console.log(err);
        alert(err);
      }); 


};

  render() {
    return <div>

   
     <div>
    <h1> Covid Information </h1>  <button style={{ color: "blue", margin: "13px" }}onClick={this.getInfoAboutCovid_19}> Covid</button>
    <h2>  1. Positive in {this.state.name}: {this.state.positive}</h2>
    <h2>  2. Positive number that has increased: {this.state.positiveI}</h2>
    <h2>  3. The total number of deaths in {this.state.name}: {this.state.death}</h2>
    <h2>  4. Date & Time: {this.state.date}</h2>
     
     
     </div>
    
    
    
    
    </div>;
  }
}
