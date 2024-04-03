'use client'

import { useEffect, useState } from "react"


const Home = () => {
    const [location, setLocation] = useState('') 
    const [weatherData, setWeatherData] = useState(null)
    const handleLocationChange = (newLocation:string) =>{
        setLocation(newLocation)
    }
    const getWeatherData = async(location:string) => {
        console.log(location)
        await fetch('http://localhost:3000/weather_data', {
        method:'post',
        body:JSON.stringify(location)
      })
      const weatherData = await fetch('http://localhost:3000/weather_data')
      return await weatherData.json()
    }

    return (
        <div>
            home
            <input 
                placeholder="location..."
                value={location}
                onChange={(e) => handleLocationChange(e.target.value)}
            />
            <button onClick={async () => {console.log(await getWeatherData(location))}}>get data</button>
           
        </div>
    )
}

export default Home