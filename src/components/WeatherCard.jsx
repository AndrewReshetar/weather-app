import React from 'react';
import './WeatherCard.css';

function WeatherCard({ day, temperature, description, img }) {
    const imgWeather = condition => {
        switch (condition) {
            case 'Rain': return `img/rain.png`;
            case 'Clouds': return `img/clouds.png`;
            case 'Clear': return `img/clear.png`;
            default: return null;
        }
    }
    const toDateTime = secs => {
        const initialTime = new Date(1970, 0, 1);
        initialTime.setSeconds(secs);
        const date = new Date(initialTime);
        let dayName = date.getDay();
        switch (dayName) {
            case 0: return 'Sunday';
            case 1: return 'Monday';
            case 2: return 'Tuesday';
            case 3: return 'Wednesday';
            case 4: return 'Thursday';
            case 5: return 'Friday';
            case 6: return 'Saturday';
            default: return null;
        }
    }

    return (
        <div className="item card">
            <div className="image">
                <img src={imgWeather(img)} alt={img} />
            </div>
            <div className="content">
                <h3 style={{ color: 'rgb(254,217,67)' }}>{toDateTime(day)}</h3>
                <div className="meta">
                    <span>Temperature: {Math.round(temperature)}&#176;C</span>
                </div>
                <div className="description">
                    <h3>{description}</h3>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
