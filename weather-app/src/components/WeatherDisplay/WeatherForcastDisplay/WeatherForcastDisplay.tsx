'use client'
import { useContext } from 'react'
import WeatherDisplayStyles from  '@/styles/components/weatherDisplay.module.css'
import Scrollable from '@/styles/scrollable.module.css'
import WeatherHourDisplay from '../WeatherHourDisplay/WeatherHourDisplay'
import { WeatherDataContext, WeatherDataContextValueType } from '@/contexts/WeatherDataContext'

type WeatherForcastDisplayProps = {

}


const WeatherForcastDisplay = ({}:WeatherForcastDisplayProps) => {
    const {forecastData} =  useContext<WeatherDataContextValueType>(WeatherDataContext)

    return (
        <div className={`${WeatherDisplayStyles.weatherForcastDisplay} ${Scrollable.scrollable}`}>
            {forecastData?.hour.map((hourData, i) => {
                return <WeatherHourDisplay hourData={hourData} key={i}/>
            })}
           
        </div>
    )
}

export default WeatherForcastDisplay