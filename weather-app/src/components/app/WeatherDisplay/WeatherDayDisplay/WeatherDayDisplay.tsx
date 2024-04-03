'use client'
import WeatherDisplayStyles from  '../../../../styles/pages/app/weatherDisplay.module.css'
import ScrollStyle from '../../../../styles/scrollable.module.css'
import WeatherCurrentDisplay from './WeatherCurrentDisplay/WeatherCurrentDisplay'
import WeatherForcastDisplay from './WeatherForcastDisplay/WeatherForcastDisplay'

type WeatherDayDisplayProps = {
}


const WeatherDayDisplay = ({}:WeatherDayDisplayProps) => {
    return (
        <div className={`${WeatherDisplayStyles.weatherDayDisplay} ${ScrollStyle.scrollable}`}>
            <WeatherCurrentDisplay/>
            <WeatherForcastDisplay/>
        </div>
    )
}

export default WeatherDayDisplay