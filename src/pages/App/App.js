import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import userService from "../../services/userService";
import Form from "../../components/Form/Form";
import Weather from "../../components/Weather/Weather";
import * as cityAPI from "../../services/city-api";
import { getWeather } from "../../services/weather-api";
import City from '../../components/City'



class App extends Component {
  state = {
    user: userService.getUser(),
    cities: [],
    icon: undefined,
    place: undefined,
    city: "",
    country: "",
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

  // getWeather = async (e) => {
  //   e.preventDefault();

  //   const country = e.target.elements.country.value;
  //   const city = e.target.elements.city.value;
  //   if (country && city) {
  //     const weatherData = await getWeather(city, country);
  //     this.setState({ weatherData: weatherData });
  //   }
  // };

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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      place: { city: this.state.city, country: this.state.country },
    });
  };

  handleDeleteCity = async id => {
    await cityAPI.deleteCity(id);
    this.setState(state => ({
      cities: state.cities.filter(c => c._id !== id)
    }), () => this.props.history.push('/city'))
  }


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
            <form onSubmit={this.handleSubmit}>
              {/* <div>{this.error ? error() : ""}</div> */}
              <div className="row">
                <div className="col-md-3 offset-md-2">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="City"
                    name="city"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    name="country"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
                  <Link to={"/weather"}>Get Weather</Link>
                </div>
              </div>
            </form>
          )}
        />
        <Route
          path="/weather"
          render={(history) => (
            <Weather
              cityName={this.state.city}
              countryName={this.state.country}
              handleAddCity={this.handleAddCity}
            />
          )}
        />
        <Route exact path='/city' render={({history}) => (
          <City 
          cityName={this.state.city}
          countryName={this.state.country} 
          handleSubmit={this.state.handleSubmit}
          handleDeleteCity={this.state.handleDeleteCity}
          />
        )}/>
    </>
    )
}
}

export default App;