'use client'
import React, { useContext, useEffect } from "react"
import WeatherForcastDisplay from "./WeatherForcastDisplay"
import {render, screen} from "@testing-library/react"
import { HourDataType } from "@/contexts/WeatherDataTypes"
import { WeatherDataContext, WeatherDataContextProvider } from "../../../contexts/WeatherDataContext"
import {testWeatherData} from '../../../testutil/testWeatherData'
const testHourData:HourDataType = {
    time: "2024-05-20 00:00",
    temp_c: 12.3,
    condition: {
        text: "Clear ",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png"
    },
    wind_mph: 5.8
}

const TestWeatherForcastDisplay = () => {
    const {setWeatherData} = useContext(WeatherDataContext)
    useEffect(() => {
        if(setWeatherData){
            setWeatherData(testWeatherData)
        }
    })
    return (
        <WeatherForcastDisplay/>
    )
}

it("check data for every hour is rendering", () => {
    render(
        <WeatherDataContextProvider>
            <TestWeatherForcastDisplay/>
        </WeatherDataContextProvider>
    )
    const hourDisplayElems = screen.getAllByRole("img")
    expect(hourDisplayElems.length).toBe(testWeatherData.forecast.hour.length)
    
})