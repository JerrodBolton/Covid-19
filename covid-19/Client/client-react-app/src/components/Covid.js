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
    // console.log(this.props.name);
  };
  //  I want to get the info about about covid-19
  getInfoAboutCovid_19 = (e) => {
    e.preventDefault();
    // So I want to add the endpoint that I want to listen on which is  /covid

    const URL = `http://localhost:8080/covid`; //API URL
     
    axios
      .get(URL, {
        params: {
          name: this.props.name 
        //   latitude: this.props.locationLat,
        //   longitude: this.props.locationLon,
        // this is okay everything here is good!!
        },
      })
      .try((res) => {
        console.log(res.date);
        // this is just some debug that I want to see if everything is moving correctly
        this.setState({
        hitAPI:true
        
        })
      })
      .catch((err) => {
        // this will console log my err if I have any

        console.log("This is the Frontend error");
        console.log(err);
        alert(err);
      }); 

// let  options = {
//   method: 'GET',
//   url: 'https://covid-19-data.p.rapidapi.com/country/code',
//   params: {code:"us"},
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
};

  render() {
    return <div>

    <button onClick={this.getInfoAboutCovid_19}> Covid</button>
    
    
    
    
    </div>;
  }
}
