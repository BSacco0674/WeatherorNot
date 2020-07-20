export function getWeather(city, country){
        return fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
          )
          .then(res => res.json())
        }