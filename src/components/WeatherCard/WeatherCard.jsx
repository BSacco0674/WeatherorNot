import React from "react";

const WeatherCard = (props) => {
  console.log(props.weatherData);
  return (
    <>
      {props.weatherData.name ? (
        <>
          {props.weatherData.message ? (
            <h4>{props.weatherData.message}</h4>
          ) : (
            <>
              <div className="col s12 m7">
                <h4 className="header">
                  Current Weather for {props.weatherData.name},{" "}
                  {props.weatherData.sys.country}
                </h4>
                <div className="card horizontal">
                  <div className="card-image">
                    <img
                      src={`/images/${props.weatherData.weather[0].icon}.gif`}
                      alt=""
                    />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>Conditions: {props.weatherData.weather[0].main} </p>
                      <p>Temperature: {props.weatherData.main.temp} &deg;F </p>
                      <p>
                        Feels Like: {props.weatherData.main.feels_like} &deg;F{" "}
                      </p>
                      <p>Humidity: {props.weatherData.main.humidity}% </p>
                      <p>
                        Visibility:{" "}
                        {(props.weatherData.visibility / 1609).toFixed(1)} miles
                      </p>
                      <p>Wind: {props.weatherData.wind.speed.toFixed(1)} mph</p>
                      <p>{`Dewpoint: ${(
                        ((props.weatherData.main.temp - 32) / 1.8 -
                          (100 - props.weatherData.main.humidity) / 5) *
                          1.8 +
                        32
                      ).toFixed(2)}°F`}</p>
                      <p>
                        Wind Gusts:{" "}
                        {props.weatherData.wind.gust
                          ? `${props.weatherData.wind.gust} mph`
                          : "0 mph"}
                      </p>
                      <p>Wind Direction: {props.windDirection}</p>
                      <p>Cloud Cover: {props.weatherData.clouds.all} %</p>
                      <p>Sunrise: {props.sunrise} AM</p>
                      <p>Sunset: {props.sunset} PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default WeatherCard;
