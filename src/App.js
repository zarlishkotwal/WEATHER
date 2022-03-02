import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./Components/CityComponent";
import WeatherComponent from "./Components/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/icons/sunny.jpg",
  "01n": "/icons/night.jpg",
  "02d": "/icons/day.jpg",
  "02n": "/icons/cloudy-night.jpg",
  "03d": "/icons/cloudy.jpg",
  "03n": "/icons/cloudy.jpg",
  "04d": "/icons/perfect-day.jpg",
  "04n": "/icons/cloudy-night.jpg",
  "09d": "/icons/rain.jpg",
  "09n": "/icons/rain-night.jpg",
  "10d": "/icons/rain.jpg",
  "10n": "/icons/rain-night.jpg",
  "11d": "/icons/storm.jpg",
  "11n": "/icons/storm.jpg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=299d2ba940df3e9fb80075bbec136bb7&units=metric `,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;