'use client'
import React, { useContext, useEffect } from "react"
import {render, screen} from "@testing-library/react"
import { WeatherDataContext, WeatherDataContextProvider } from "./WeatherDataContext"
import {testWeatherData} from '../testutil/testWeatherData'

it("test context works", () => {
    const TestComponent = () => {
        const {locationData, forecastData, currentData, setWeatherData} = useContext(WeatherDataContext)
        useEffect(() => {
            if(setWeatherData){
                setWeatherData(testWeatherData)
            }
        })

        return(
            <>
                <p>{locationData?.country}</p>
                <p>{currentData?.temp_c}</p>
                <p>{forecastData?.hour[0]?.temp_c}</p>
            </>
        )
    }

    render(
        <WeatherDataContextProvider>
            <TestComponent/>
        </WeatherDataContextProvider>
    )

    const locationElem = screen.getByText(testWeatherData.location.country)
    const currentElem = screen.getByText(testWeatherData.current.temp_c)
    const forecastElem = screen.getByText(testWeatherData.forecast.hour[0].temp_c)

    expect(locationElem).toBeInTheDocument()
    expect(currentElem).toBeInTheDocument()
    expect(forecastElem).toBeInTheDocument()
})