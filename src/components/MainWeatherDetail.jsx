import React from 'react';
import './MainWeatherDetail.css';
import WeatherCard from './WeatherCard';

function MainWeatherDetail({ weather }) {
    let result = '';
    if (weather !== null) {
        result = weather.map(el => {
            return (
                <WeatherCard key={el.dt} day={el.dt} temperature={el.main.temp} description={el.weather[0].description} img={el.weather[0].main} />
            )
        })
    }

    return (
        <div className="ui unstackable items">
            {result}
        </div>
    )
}

export default MainWeatherDetail
