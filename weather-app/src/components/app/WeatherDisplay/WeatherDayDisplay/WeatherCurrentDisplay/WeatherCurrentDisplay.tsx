'use client'
import { useContext } from 'react'
import WeatherDisplayStyles from  '../../../../../styles/pages/app/weatherDisplay.module.css'
import { WeatherDataContext, WeatherDataContextValueType } from '@/contexts/WeatherDataContext'
type WeatherCurrentDisplayProps = {

}


const WeatherCurrentDisplay = ({}:WeatherCurrentDisplayProps) => {
    const {currentData, locationData} = useContext<WeatherDataContextValueType>(WeatherDataContext)

    return (
        <div className={WeatherDisplayStyles.weatherCurrentDisplay}>
            {currentData &&
                <>
             <div className={WeatherDisplayStyles.currentTitleContainer}>
                <h1>{locationData?.name}</h1>
                <h3>{locationData?.localtime}</h3>
                <h3>{locationData?.country}</h3>
            </div>
            <div className={WeatherDisplayStyles.currentMainContainer}>
                <p>{`${currentData?.temp_c}°C, ${currentData?.condition.text}`}</p>
                <img src={currentData?.condition.icon}/>
                <p>{`feels like ${currentData?.feelslike_c}°C`}</p>
                <p>{`wind speed: ${currentData?.wind_mph} mph `}</p>
            </div>
            </>
            }
        </div>
    )
}

export default WeatherCurrentDisplay