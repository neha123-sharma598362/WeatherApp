import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import "./WeatherApp.css";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city:"Chandigarh",
        feelsLike : 24.84,
        temp : 25.85,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return(
        <>
        <div style={{textAlign:"center"}}>
            <h2>WEATHER APP</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        </>
    )
}