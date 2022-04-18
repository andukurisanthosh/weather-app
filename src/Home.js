import { useEffect, useState } from "react";

const Home = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({})
    const kelvin = 273;
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb2c492f9dfdf3065110afd71cdbd319`


    useEffect(() => {
        const fetchApi = async () => {
            const responce = await fetch(base);
            const data = await responce.json();
            console.log(data);
            setWeather(data)
        }
        fetchApi();
    }, [city])

    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="search-bar">
                        <input
                            type="search"
                            placeholder="Search....."
                            className="search-box"
                            onChange={(e) => setCity(e.target.value)} />
                        {/* <button className="search-btn" onClick={search()}>search</button> */}
                    </div>
                </div>
                <div className="row weather-content">
                    <div className="col-3 weather-card">
                        <p className="weather-city">{city}</p>
                    </div>
                    <div className="col-3 weather-card">
                        <ul>
                            {weather.main ? <li className="temp">{Math.floor(weather.main.temp-kelvin)}°C</li> : null}
                            {weather.weather? <li className="description">{weather.weather[0].main}</li>:null}
                            
                            <li className="wind">
                                <ul>
                                    <h3>WIND</h3>
                                    {weather.wind ? <li className="speed">speed:{weather.wind.speed}</li>:null}
                                    {weather.wind ? <li className="deg">deg:{weather.wind.deg}</li>:null}        
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
               

            </div>
        </>
    )
}

export default Home;