'use client'
import styles from '../styles/pages/app/page.module.css'
import { useContext, useEffect, useState } from "react"
import InputBar from "@/components/app/InputBar/InputBar"
import WeatherDisplay from '@/components/app/WeatherDisplay/WeatherDisplay'
import { WeatherDataContext, WeatherDataContextValueType} from '@/contexts/WeatherDataContext'

const Home = () => {
    const [location, setLocation] = useState('') 
    const {locationData, currentData, forecastData, setWeatherData} = useContext<WeatherDataContextValueType>(WeatherDataContext)
    const [showRed, setShowRed] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>('')

    const handleLocationChange = (newLocation:string) =>{
        setLocation(newLocation)
    }
    
    useEffect(() => {
        setShowRed(errorMsg.length > 0)
    }, [errorMsg])
    const getWeatherData = async(location:string) => {
        if(location){
            setShowRed(false)
            await fetch('http://localhost:3000/weather_data', {
                method:'post',
                body:JSON.stringify(location)
            })
            const data = (await (await fetch('http://localhost:3000/weather_data')).json())[0]
            if(!data.error){
                setErrorMsg('')
                if(setWeatherData) setWeatherData({current:data.current, location:data.location, forecast:data.forecast.forecastday[0]})
            }else{
                setErrorMsg(data.error.message)
            }
        }else{
            setErrorMsg('Please enter a location')
        }
        
    }

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

            <WeatherDisplay
            />
            
        </div>
    )
}

export default Home