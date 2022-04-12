import ".//index.css"
import React,{useState} from 'react';
import Navbar from "./Navbar";

const api={
    key:'5187d76b13c49f68347104abcd3130b7',
    base:"http://api.openweathermap.org/data/2.5/"
  }

export default function Myweather(props) {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const Action = () =>{
    props.setProgress(50);
    // if(evt.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result);
        console.log(result);
        props.setProgress(100);
      });
    // }
  }

  const dateBuilder=(d)=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  const mode="light"
  return(
    <div className={(typeof weather.main !== "undefined") ?( (weather.main.temp > 16 )? 'app warm' : 'app'):'app'}>

    <Navbar mode={mode}/>

    <main>
      <div className="search-box">
        <input type="text" className='search-bar' placeholder='Search the City' 
        onChange={e=>setQuery(e.target.value)} value={query}
         />
        <button type="button" class="btn" onClick={Action} style={{color:'white'}}>Check Weather</button>
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
        <div className="location">{weather.name},{weather.sys.country}</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">
          {Math.round(weather.main.temp)}°c
        </div>
        <div className="weather">{weather.weather[0].main}</div>
      </div>

        </div>
      ) : ('')}
      </main>
    </div>
  );
}
