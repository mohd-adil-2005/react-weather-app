
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


function WeatherApp(){

    const[WeatherInfo, setWeatherInfo]= useState(
        {
            temp:23,
            temp_max:23.25,
            temp_min:23.12,
            feels_like:23.67,
            humidity: 32,
            name:"Delhi",
            country: "IN",
            sunrise: 17738473,
            sunset: 4654674,
            weather:"haze",
        }
    );
    let updateInfo= (result)=>{
        setWeatherInfo(result);
    }


    return(


        <div>

            <h2>Weather App</h2>
            <SearchBox updateInfo= {updateInfo}/>
            <br></br>
            <InfoBox info={WeatherInfo}/>
        </div>
    );
}
export default WeatherApp;