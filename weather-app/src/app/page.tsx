'use client'
import styles from '@/styles/pages/app/page.module.css'
import { useContext, useEffect, useState } from "react"
import InputBar from "@/components/InputBar/InputBar"
import { WeatherDataContext, WeatherDataContextValueType} from '@/contexts/WeatherDataContext'
import WeatherDisplayStyles from  '@/styles/components/weatherDisplay.module.css'
import WeatherCurrentDisplay from '@/components/WeatherDisplay/WeatherCurrentDisplay/WeatherCurrentDisplay'
import WeatherForcastDisplay from '@/components/WeatherDisplay/WeatherForcastDisplay/WeatherForcastDisplay'
import ScrollStyles from "@/styles/scrollable.module.css"

const Home = () => {
    const [location, setLocation] = useState('') 
    const {locationData, currentData, forecastData, setWeatherData} = useContext<WeatherDataContextValueType>(WeatherDataContext)
    const [showRed, setShowRed] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [path, setPath] = useState<string | undefined>('')
    const handleLocationChange = (newLocation:string) =>{
        setLocation(newLocation)
    }

    useEffect(() => {
        if(process.env.NODE_ENV === "development"){
            setPath(process.env.NEXT_PUBLIC_DEVELOPMENT_PATH)
        }else if(process.env.NODE_ENV === "production"){
            setPath(process.env.NEXT_PUBLIC_PRODUCTION_PATH)
        }else{
            console.log('invalid node_env')
        }
    }, [])
    
    useEffect(() => {
        setShowRed(errorMsg.length > 0)
    }, [errorMsg])
    const getWeatherData = async(location:string) => {
        if(location){
            setShowRed(false)
            await fetch(`${path}/weather_data`, {
                method:'post',
                body:JSON.stringify(location)
            })
            const data = (await (await fetch(`${path}/weather_data`)).json())[0]
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

        <div className={`${WeatherDisplayStyles.weatherDisplayContainer} ${ScrollStyles.scrollable}`}>
            <WeatherCurrentDisplay/>
            <WeatherForcastDisplay/>
        </div>
            
        </div>
    )
}

export default Home