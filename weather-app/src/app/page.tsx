'use client'

import { useEffect, useState } from "react"




const Home = async () => {
    const [location, setLocation] = useState('') 
    const [weatherData, setWeatherData] = useState(null)
    const handleLocationChange = (newLocation:string) =>{
        setLocation(newLocation)
    }
    const getWeatherData = async(location:string) => {
       
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}}`)
        setWeatherData(await res.json())
        
        
    }
    return (
        <div>
            home
            <input 
                placeholder="location..."
                value={location}
                onChange={(e) => handleLocationChange(e.target.value)}
            />
            <button onClick={() => getWeatherData(location)}>get data</button>
            {weatherData ? weatherData.current.temp_c:null}
        </div>
    )
}

export default Home