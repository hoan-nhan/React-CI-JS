import React from "react";
import "./Weathers.css";

function generatorWeather(weathers) {
  return weathers.map((weather) => {
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.weather[0]["icon"]}.svg`;
    return (
      <li key={weather.id} className="city">
        <h2 className="city-name" data-name="Hanoi,VN">
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
        </h2>
        <div className="city-temp">
          {Math.round(weather.main.temp)}
          <sup>°C</sup>
        </div>
        <figure>
          <img
            className="city-icon"
            src={icon}
            alt={weather.weather[0].description}
          />
          <figcaption>{weather.weather[0].description}</figcaption>
        </figure>
      </li>
    );
  });
}

export default function Weathers({ weathers }) {
  const insertWeathers = generatorWeather(weathers);
  return (
    <section className="ajax-section">
      <div className="container">
        <ul className="cities">{insertWeathers}</ul>
      </div>
    </section>
  );
}
