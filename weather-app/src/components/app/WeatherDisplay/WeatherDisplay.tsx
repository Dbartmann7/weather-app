'use client'
import WeatherDisplayStyles from  '../../../styles/pages/app/weatherDisplay.module.css'
import WeatherCurrentDisplay from './WeatherDayDisplay/WeatherCurrentDisplay/WeatherCurrentDisplay'
import WeatherDayDisplay from './WeatherDayDisplay/WeatherDayDisplay'
import WeatherForcastDisplay from './WeatherDayDisplay/WeatherForcastDisplay/WeatherForcastDisplay'
type WeatherDisplayProps = {

}


const WeatherDisplay = ({}:WeatherDisplayProps) => {
    return (
        <div className={WeatherDisplayStyles.weatherDisplayContainer}>
            <WeatherCurrentDisplay/>
            <WeatherForcastDisplay/>
        </div>
    )
}

export default WeatherDisplay