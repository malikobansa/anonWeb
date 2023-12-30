import React, { useState, useEffect } from 'react';

export default function WeatherForecast() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://open-weather13.p.rapidapi.com/city/nigeria';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ab11d6ea47mshaa5a1960c286d92p141310jsn20556f981e65',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };

    const fetchWeather = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setForecast(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Weather Forecast</h1>
      {forecast && (
        <div>
          {/* Displaying some parts of the forecast. Adapt based on your API response */}
          <p>City: {forecast.name}</p>
          <p>Temperature: {forecast.main.temp}°C</p>
          <p>Condition: {forecast.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}
