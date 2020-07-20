import React, { Component } from "react";
import "./Weather.css";
import { getWeather } from "../../services/weather-api";



class Weather extends Component {
  state = {
    weatherData: undefined,
    locale: undefined
  }

  async componentDidMount(){
    const weatherData = await getWeather(this.props.cityName, this.props.countryName)
    const locale = {};
    locale["city"] = weatherData.name;
    locale["country"] = weatherData.sys.country;
    this.setState({weatherData, locale})
  }

  render(){
    // const props = this.props
    return (
      <>
      {this.state.weatherData ? 
      <>
      <form >
      
      <div className="container text-light">
        <div className="Card">
          <h1 className="text-white py-3">{this.props.cityName}</h1>
          {/* <h5 className="py-4">
            <i className={`wi ${props.weatherIcon} display-1`} />
          </h5> */}
          {/* <img src={`/assets/${props.weatherIcon}.gif`} alt="" />   */}
          {/* Get Celsius */}
          {this.state.weatherData.main.temp ? (
            <h1 className="py-2">{this.state.weatherData.main.temp}&deg;</h1>
          ) : null}
  
          {/* show max and min temp */}
          {maxminTemp(this.state.weatherData.main.temp_min, this.state.weatherData.main.temp_max)}
  
          {/* Weather description */}
          <h4 className="py-3">
            {this.state.weatherData.weather[0].description.charAt(0).toUpperCase() +
              this.state.weatherData.weather[0].description.slice(1)}
          </h4>
          <h4>{`Dewpoint: ${ (((this.state.weatherData.main.temp - 32) / 1.8 -
            (100 - this.state.weatherData.main.humidity) / 5)*1.8+32).toFixed(2)}°F`}</h4>
        </div>
      </div>
     
      </form>
      <button
                    className="btn btn-warning"
                    onClick={() => this.props.handleAddCity(this.state.locale)}
                  >
                    Save City2
                  </button> 
      </>
      :
      <></>
    }
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
