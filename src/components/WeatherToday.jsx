import React from 'react'
import './WeatherToday.css';

function WeatherToday({ city, weatherToday }) {
    let result = '';

    const imgWeather = condition => {
        switch (condition) {
            case 'Rain': return `img/rain.png`;
            case 'Clouds': return `img/clouds.png`;
            case 'Clear': return `img/clear.png`;
            default: return null;
        }
    }

    if (weatherToday !== null) {
        result = weatherToday.map(el => {
            return (
                <div className="item mainBlock" key={el.dt}>
                    <div className="image">
                        <img src={imgWeather(el.weather[0].main)} alt={el.weather[0].main} />
                    </div>
                    <div className="content">
                        <p>Today</p>
                        <h1>{city}</h1>
                        <div className="meta">
                            <span>Temperature: {Math.round(el.main.temp)}&#176;C </span>
                        </div>
                        <div className="description">
                            <p>{el.weather[0].description}</p>
                        </div>
                    </div>
                </div >
            )
        })
    }

    return (
        <div className="weatherToday">
            {result}
        </div>
    )
}

export default WeatherToday
