import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import userService from "../../services/userService";
import Form from "../../components/Form/Form";
import Weather from "../../components/Weather/Weather";
import * as cityAPI from "../../services/city-api";
import { getWeather } from "../../services/weather-api";
class App extends Component {
  state = {
    user: userService.getUser(),
    weatherData: undefined,
    cities: [],
    icon: undefined,
  };

  weatherIcon = {
    Thunderstorm: "",
    Drizzle: "",
    Rain: "",
    Snow: "",
    Atmosphere: "",
    Clear: "../../assets/itscold.gif",
    Clouds: "",
  };
  get_WeatherIcon = (icons, rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  };

  getWeather = async (e) => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    if (country && city) {
      const weatherData = await getWeather();
      this.setState({ weatherData: weatherData });
    }
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };
  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };
  handleAddCity = async (cityData) => {
    const newCity = await cityAPI.create(cityData);
    this.setState(
      (state) => ({
        cities: [...state.cities, newCity],
      }),
      () => this.props.history.push("/city")
    );
  };
  async componentDidMount() {
    const cities = await cityAPI.getAll();
    this.setState({ cities });
  }
  render() {
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          path="/"
          render={(history) => (
            <Form
              getWeather={this.getWeather}
              error={this.state.error}
              handleAddCity={this.handleAddCity}
              city={this.state.city}
              country={this.state.country}
              place={this.state.place}
            />
          )}
        />
        <Route
          path="/weather"
          render={(history) => (
            <Weather
              weatherData={this.state.weatherData}
              cityName={this.state.city}
              weatherIcon={this.state.icon}
            />
          )}
        />
        {this.state.cities.map((city) => (
          <div>{city.city}</div>
        ))}
      </>
    );
  }
}
export default App;
