import React, { Component } from 'react'

export default class Img extends Component {



  // I'm thinking of making something to check  what is in the the props
    checkConsole = () =>  {
        console.log(this.props.image); 
        console.log(this.props.name);// This is the name that the person searched in the SearchQuery
        
    }

    render() {
        return (
            <div>
              <img src = {`https://maps.locationiq.com/v3/staticmap?key=pk.1f933372e4fbe974a7b262d30595f6c4&center=${this.props.locationLat},${this.props.locationLon}&zoom=6`} alt={`${this.props.name}`} fluid
              style={imageStyle}
              />
              {/* I need to call this function */}
              {/* <button onClick = {this.checkConsole}></button> */}
               
            </div>
        )
    }
}

const imageStyle = {
    textAlign: "center",
    padding: "3px",
    width:"80%",
    // transitionDelay: "0s",
    border: "9px rgb(200, 132, 37)",
    borderStyle: "groove",
    borderRadius:" 6px",
}
