import React from "react";

const WeatherInfo = (props) => {
    // Conditional rendering: we only show results once they're available.
    if (props && props.data === null) {
      return '';
    } else {
      return (
        <div>
          <h2>Weather for { props.data.name }</h2>
          <h3>Currently { props.data.main.temp }&deg;C</h3>
          <img src={`http://openweathermap.org/img/w/${ props.data.weather[0].icon }.png` } alt={props.data.weather[0].description} />
          <h4>{props.data.weather[0].main}: {props.data.weather[0].description}</h4>
        </div>
      );
    }
}

export default WeatherInfo