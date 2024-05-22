'use client'
import React from "react"
import WeatherForcastDisplay from "./WeatherForcastDisplay"
import {render, screen} from "@testing-library/react"
import { HourDataType } from "@/contexts/WeatherDataTypes"
import { WeatherDataContext, WeatherDataContextProvider } from "@/contexts/WeatherDataContext"
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

    return (
        <WeatherForcastDisplay/>
    )
}
const testForcastData:HourDataType[] = new Array(23).fill(testHourData)
it("test", () => {
    render(
        <WeatherDataContextProvider>
            <WeatherForcastDisplay/>
        </WeatherDataContextProvider>
    )

    
})