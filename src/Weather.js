import React from "react";
import background from "./sunset.jpg";

export default function Weather() {
  let weatherData = {
    wind: 10,
    feels: 80,
    humidity: 80,
    condition: "Cloudy",
    city: "Mexico City",
    temperature: 75,
    date: "Today's date",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="Weather">
      <div className="weather-heading">
        <button type="button" className="here">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
        </button>
        <form className="form-inline">
          <input
            type="search"
            placeholder="Type a city..."
            autofocus="on"
            autocomplete="off"
            id="search-input"
            className="form-control mr-sm-1"
            aria-label="search"
          />
          <button type="submit" value="search" className="btn btn-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>

        <div className="space"></div>

        <div
          className="img-container"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="details-result">
            <div>Wind Speed:{weatherData.wind}m/s</div>
            <div>Feels like: {weatherData.feels}°C | F</div>
            <div>Humidity: {weatherData.humidity}%</div>
            <div>{weatherData.condition}</div>
          </div>
          <div className="city-result">
            <h1>{weatherData.city}</h1>
            <img
              src={weatherData.imgUrl}
              alt={weatherData.condition}
              className="float-left"
            />
            <h2>
              <span className="temperature">{weatherData.temperature}</span>
              <span className="units">
                <span>°C</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="weather-details">
        <div className="row">
          <div className="col-sm-12">
            <div className="current-time">
              <h3>{weatherData.date}</h3>
            </div>
          </div>
        </div>
        <div className="forecast"></div>
      </div>
    </div>
  );
}
