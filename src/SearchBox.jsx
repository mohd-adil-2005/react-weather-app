import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  "./SearchBox.css"
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';

function SearchBox({ updateInfo}){
    let [city, setcity]= useState("");
    let [error, setError]= useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="8d0cc794946887f28b190908608d0306";
    
    let getWeatherInfo= async()=>{
        try{
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let responsejson= await response.json();
       console.log(responsejson);
       let result=  {
        temp:responsejson.main.temp,
        temp_max:responsejson.main.temp_max,
        temp_min:responsejson.main.temp_min,
        feels_like: responsejson.main.feels_like,
        humidity: responsejson.main.humidity,
        name:responsejson.name,
        country: responsejson.sys.country,
        sunrise: responsejson.sys.sunrise,
        sunset: responsejson.sys.sunset,
        weather: responsejson.weather[0],
        
        
            
       }
       console.log(result);
       return result
    }
    catch(err){
        throw err;
    }
    }
    let cityP= (event)=>{
       
        setcity(event.target.value);

    }
    let handleSubmit=  async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setcity("");
        let info= await getWeatherInfo();
        updateInfo(info);
        }catch(err){
            setError(true);
        }

    }


    return (
        <div className='SearchBox'>

<form>
<TextField id="outlined-basic" label="CityName"
 variant="outlined"required  value={city} onChange={cityP} /> 
<br></br>
<br></br>

<Button variant="contained"
 type='submit' onClick={handleSubmit}>Click me!.
</Button>
{error&& <h6  style={{color:"red"}}>No such place Exists.. </h6>}
</form>

 </div>
    );
}
export default SearchBox;