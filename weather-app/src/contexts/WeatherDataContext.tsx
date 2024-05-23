'use client'

import { ReactNode, createContext, useState } from "react";
import { CurrentDataType, ForecastDataType, LocationDataType, WeatherDataType } from "./WeatherDataTypes";

type WeatherDataContextPropsType = {
    children:ReactNode
}
export type WeatherDataContextValueType = {
    locationData?:LocationDataType,
    currentData?:CurrentDataType,
    forecastData?:ForecastDataType,

    setWeatherData?:(weatherData:WeatherDataType) => void
}

export const WeatherDataContext = createContext<WeatherDataContextValueType>({})

export const WeatherDataContextProvider = ({children}:WeatherDataContextPropsType) => {
    const [currentData, setCurrentData] = useState<CurrentDataType | undefined>()
    const [locationData, setLocationData] = useState<LocationDataType>({
        name:'',
        country:'',
        localtime:''
    })
    const [forcastData, setForcastData] = useState<ForecastDataType>({
        hour:[]
    })
    const setWeatherData = (weatherData:WeatherDataType) => {
        setLocationData(weatherData.location)
        setCurrentData(weatherData.current)
        setForcastData(weatherData.forecast)
    }
    
    const value:WeatherDataContextValueType = {
        locationData:locationData,
        currentData:currentData,
        forecastData:forcastData,

        setWeatherData:setWeatherData
    }

    return (
        <WeatherDataContext.Provider value={value}>
            {children}
        </WeatherDataContext.Provider>
    )
}

