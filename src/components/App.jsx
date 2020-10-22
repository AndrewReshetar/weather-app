import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SearchBar from './SearchBar'
import MainWeatherDetail from './MainWeatherDetail';
import WeatherToday from './WeatherToday';
import Error from './Error';

function App() {
    const [cityName, setCityName] = useState('');
    const [weather, setWeather] = useState(null);
    const [today, setToday] = useState(null);
    const [allComponents, setAllComponents] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const mainData = async () => {
            const response = await fetch('https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3');
            const location = await response.json();
            return location;
        }
        mainData().then(loc => {
            handleFormSubmit(loc.city);
        })
    }, [])

    const handleFormSubmit = async (city) => {
        try {
            const { data } = await axios.get('https://api.openweathermap.org/data/2.5/forecast',
                {
                    params: {
                        q: city,
                        units: 'metric',
                        appid: 'ca120b2db11a5f80c811120cb4d702b0'
                    }
                }
            )
            const days = [data.list[10], data.list[18], data.list[26], data.list[34]];
            const today = [data.list[2]];
            setCityName(data.city.name);
            setToday(today);
            setWeather(days);
            setAllComponents(true);
            setError(false);
        } catch (e) {
            setAllComponents(false);
            setError(true);
        }
    }

    return (
        <div>
            <div className="ui container">
                <SearchBar handleFormSubmit={handleFormSubmit} />
                <div style={allComponents ? { dispay: 'block' } : { display: 'none' }}>
                    <WeatherToday city={cityName} weatherToday={today} />
                    <MainWeatherDetail weather={weather} />
                </div>
            </div>
            <div className="error" style={error ? { dispay: 'block' } : { display: 'none' }}>
                <Error />
            </div>
        </div>
    )
}

export default App
