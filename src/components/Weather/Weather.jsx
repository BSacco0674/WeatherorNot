import React, { Component } from "react";
import "./Weather.css";



class Weather extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddCity(this.state.formData);
  };
  render(){
    const props = this.props
    const dewpoint = ((props.dewpoint*1.8)+32).toFixed(1)
    return (
      <>
      <form >
      
      <div className="container text-light">
        <div className="Card">
          <h1 className="text-white py-3">{props.cityname}</h1>
          {/* <h5 className="py-4">
            <i className={`wi ${props.weatherIcon} display-1`} />
          </h5> */}
          <img src={`/assets/${props.weatherIcon}.gif`} alt="" />  
          {/* Get Celsius */}
          {props.temp_celsius ? (
            <h1 className="py-2">{props.temp_celsius}&deg;</h1>
          ) : null}
  
          {/* show max and min temp */}
          {maxminTemp(props.temp_min, props.temp_max)}
  
          {/* Weather description */}
          <h4 className="py-3">
            {props.description.charAt(0).toUpperCase() +
              props.description.slice(1)}
          </h4>
          <h4>{props.dewpoint?`Dewpoint: ${dewpoint}°F`:""}</h4>
        </div>
      </div>
      <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Save City
            <i class="material-icons right">send</i>
          </button>
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
