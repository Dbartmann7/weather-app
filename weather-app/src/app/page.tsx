'use client'
import styles from '@/styles/pages/app/page.module.css'
import { useContext, useEffect, useState } from "react"
import InputBar from "@/components/InputBar/InputBar"
import { WeatherDataContext, WeatherDataContextValueType} from '@/contexts/WeatherDataContext'
import WeatherDisplayStyles from  '@/styles/components/weatherDisplay.module.css'
import WeatherCurrentDisplay from '@/components/WeatherDisplay/WeatherCurrentDisplay/WeatherCurrentDisplay'
import WeatherForcastDisplay from '@/components/WeatherDisplay/WeatherForcastDisplay/WeatherForcastDisplay'
import ScrollStyles from "@/styles/scrollable.module.css"
import {fetchWeatherData} from "@/util/weatherData"

const Home = () => {
    const [location, setLocation] = useState('') 
    const {locationData, currentData, forecastData, setWeatherData} = useContext<WeatherDataContextValueType>(WeatherDataContext)
    const [showRed, setShowRed] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>('')
 
    const handleLocationChange = (newLocation:string) =>{
        setLocation(newLocation)
    }

    const getWeatherData = async (location:string) => {
        let data = await fetchWeatherData(location)
        console.log(data)
        if(data.weatherData){
            setErrorMsg('')
            data.weatherData.forecast = data.weatherData.forecast.forecastday[0]
            // gets rid of type error
            if(setWeatherData){
                setWeatherData(data.weatherData)
            } 
        }else{
            setErrorMsg(data.error.message)
        }
    }
    useEffect(() => {
        setShowRed(errorMsg.length > 0)
    }, [errorMsg])

    return (
        <div className={styles.pageContainer}>
            <InputBar
                showRed={showRed}
                placeholder="Location..."
                value={location}
                setValue={handleLocationChange}
                buttonFn={async () => {await getWeatherData(location)}}
                buttonLabel="Search"
                errorMsg={errorMsg}
            />

        <div className={`${WeatherDisplayStyles.weatherDisplayContainer} ${ScrollStyles.scrollable}`}>
            <WeatherCurrentDisplay/>
            <WeatherForcastDisplay/>
        </div>
            
        </div>
    )
}

export default Home