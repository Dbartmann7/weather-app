'use client'
import { HourDataType } from '@/contexts/WeatherDataTypes'
import WeatherDisplayStyles from  '@/styles/components/weatherDisplay.module.css'

type WeatherHourDisplayProps = {
    hourData:HourDataType
}


const WeatherHourDisplay = ({hourData}:WeatherHourDisplayProps) => {
   
    return (
        <div className={WeatherDisplayStyles.weatherHourDisplay}>
            <p>{hourData.time.substring(hourData.time.length - 5)}</p>
            <p>{`${hourData.temp_c}°C, ${hourData.condition.text}`}</p>
            <img src={hourData.condition.icon}/>
            <p className={WeatherDisplayStyles.hourWindSpeedDisplay}>{`wind speed: ${hourData?.wind_mph}mph`}</p>
        </div>
    )
}

export default WeatherHourDisplay