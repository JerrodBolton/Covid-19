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
  getInfoAboutCovid_19 = async (e) => {
    e.preventDefault();
    // So I want to add the endpoint that I want to listen on which is  /covid
    const URL = `https://api.covidtracking.com/v1/states/${this.props.abbr}/current.json?`; //API URL
    console.log(URL);
    await axios
      .get(
        URL
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
          hitAPI: true,
          positive: res.data.positive,
          death: res.data.death,
          date: res.data.lastUpdateEt,
          name: this.props.name,
          sq: this.props.searchQuery,
          positiveI: res.data.positiveIncrease,
        });
      })
      .catch((err) => {
        // this will console log my err if I have any

        console.log("This is the Frontend error");
        console.log(err);
        alert(err);
      });
  };

  render() {
    return (
      <div>
        <div className="covidInfo">
          <nav className="covidInfoTitle">
            <a
            href={null}
            >
              <h1
                style={{
                position: "relative",
                zoom: "1.35",

                }}
              >
                Covid Information
              </h1>
            </a>
            <a
            href={null}
            >
              <button
                style={{
                  zoom: "1.25",
                  width: "65px",
                  height: "20px",
                  background: "white",
                  color: "rgb(200, 132, 37)",
                  border: "10px rgb(200, 132, 37)",
                  borderRadius: "2px",
                  fontSize:"20px",
                  position: "relative",
                  top:"0.8rem",
                  right:"70px",
                  zoom: "1.50",
                }}
                onClick={this.getInfoAboutCovid_19}
              >
                Info!
              </button>
            </a>
          </nav>

          <h3>
     
            1. Positive in {this.state.name}: {this.state.positive}
          </h3>
          <h3>
            2. Positive number that has increased: {this.state.positiveI}
          </h3>
          <h3>
            3. The total number of deaths in {this.state.name}: {this.state.death}
          </h3>
          <h3
           style={{
           marginBottom: "10px",

           }}
          > 4. Date & Time: {this.state.date}</h3>
        </div>
      </div>
    );
  }
}
