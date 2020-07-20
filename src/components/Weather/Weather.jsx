import React, { Component } from "react";
import "./Weather.css";



class Weather extends Component {

  render(){
    const props = this.props
    return (
      <>
      <form >
      
      <div className="container text-light">
        <div className="Card">
          <h1 className="text-white py-3">{props.cityName}</h1>
          {/* <h5 className="py-4">
            <i className={`wi ${props.weatherIcon} display-1`} />
          </h5> */}
          {/* <img src={`/assets/${props.weatherIcon}.gif`} alt="" />   */}
          {/* Get Celsius */}
          {props.weatherData.main.temp_celsius ? (
            <h1 className="py-2">{props.weatherData.main.temp_celsius}&deg;</h1>
          ) : null}
  
          {/* show max and min temp */}
          {maxminTemp(props.weatherData.main.temp_min, props.weatherData.main.temp_max)}
  
          {/* Weather description */}
          <h4 className="py-3">
            {props.description.charAt(0).toUpperCase() +
              props.description.slice(1)}
          </h4>
          <h4>{`Dewpoint: ${ (props.main.temp - 32) / 1.8 -
            (100 - props.main.humidity) / 5}°F`}</h4>
        </div>
      </div>
     
      </form>
      </>
    );
  }
 
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
