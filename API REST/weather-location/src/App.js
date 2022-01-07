import { Fragment, useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, lon) => {
    let res = await axios.get(
      "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}",
      {
        params: {
          lat,
          lon,
          appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        },
      }
    );
    setWeather(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location === false) {
    return (
      <Fragment>
        É necessário permissão de acesso da localização no seu browser
      </Fragment>
    );
  } else if (weather === false) {
    return <Fragment>Carregando Clima...</Fragment>;
  } else {
    return (
      <Fragment>
        <h3>
          Clima nas suas Coordenadas ({weather["main"][0]["description"]})
        </h3>
        <hr />
        <ul>
          <li>Temperatura atual: {weather["main"]["temp"]}º</li>
          <li>Temperatura máxima:{weather["main"]["temp_max"]}º</li>
          <li>Temperatura minima: {weather["main"]["temp_min"]}º</li>
          <li>Pressão: {weather["main"]["pressure"]} hpa</li>
          <li>Umidade: {weather["main"]["humidity"]}%</li>
        </ul>
      </Fragment>
    );
  }
}

export default App;
