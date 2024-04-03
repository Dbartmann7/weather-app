'use client'
import { HourDataDype } from '@/contexts/WeatherDataTypes'
import WeatherDisplayStyles from  '../../../../../../styles/pages/app/weatherDisplay.module.css'
import { useMediaQuery } from 'usehooks-ts'

type WeatherHourDisplayProps = {
    hourData:HourDataDype
}


const WeatherHourDisplay = ({hourData}:WeatherHourDisplayProps) => {
    const showWind = useMediaQuery('(min-width: 290px)')
    return (
        <div className={WeatherDisplayStyles.weatherHourDisplay}>
            <p>{hourData.time.substring(hourData.time.length - 5)}</p>
            <p>{`${hourData.temp_c}°C, ${hourData.condition.text}`}</p>
            <img src={hourData.condition.icon}/>
            {showWind ? <p>{`wind speed: ${hourData?.wind_mph} mph `}</p>:null}
        </div>
    )
}

export default WeatherHourDisplay