/** @format */

import React, { useState } from 'react';
import Header from '../components/Header';
import './pages.css';
import axios from 'axios';
import CheckConnection from '../components/CheckConnection';

function Mainpage() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=408d4973e62ae40efa680e7fb569cc4c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };
  return (
    <CheckConnection>
      <div className='mainPage'>
        <Header />
        <div className='container text-center mt-5'>
          <div className='container-fluid'>
            <input
              type='text'
              className='form-control'
              id='form-control'
              placeholder='Enter a location'
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyDown={searchLocation}
            ></input>
          </div>
        </div>
        {typeof data.main === 'undefined' ? (
          <div className='container text-center mt-2'>
            <p>Enter a city or location to check weather status</p>
          </div>
        ) : (
          <div className='container'>
            {/*From here*/}

            <div
              className='container'
              id='div-top'
            >
              <div
                className='container'
                id='div-location'
              >
                <p>{data.name}</p>
              </div>
              <div
                className='container'
                id='div-temp'
              >
                {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
              </div>
            </div>

            <div
              className='container'
              id='div-center'
            >
              <div
                className='container'
                id='div-description'
              >
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>
            <div
              className='container text-center fixed-bottom'
              id='div-bottom'
            >
              <div className='row'>
                <div className='col-sm'>
                  <div
                    className='container'
                    id='div-feels'
                  >
                    {data.main ? (
                      <p>
                        <b>{data.main.feels_like.toFixed()}°F</b>
                      </p>
                    ) : null}
                    <p className='text-warning'>Feels Like</p>
                  </div>
                </div>
                <div className='col-sm'>
                  <div
                    className='container'
                    id='div-humidity'
                  >
                    {data.main ? (
                      <p className='text-warning'>
                        <b>{data.main.humidity.toFixed()}%</b>
                      </p>
                    ) : null}
                    <p>Humidity</p>
                  </div>
                </div>
                <div className='col-sm'>
                  <div
                    className='container'
                    id='div-wind-speed'
                  >
                    {data.wind ? (
                      <p>
                        <b>{data.wind.speed.toFixed()} MPH</b>
                      </p>
                    ) : null}
                    <p className='text-warning'>Wind Speed</p>
                  </div>
                </div>
              </div>
            </div>
            {/*Ends here*/}
          </div>
        )}
      </div>
    </CheckConnection>
  );
}

export default Mainpage;
