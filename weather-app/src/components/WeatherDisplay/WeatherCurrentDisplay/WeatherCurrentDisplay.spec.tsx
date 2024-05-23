'use client'
import React, { useContext, useEffect } from "react"
import InputBtn from "./WeatherCurrentDisplay"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import WeatherCurrentDisplay from "./WeatherCurrentDisplay"
import { WeatherDataContext, WeatherDataContextProvider } from "../../../contexts/WeatherDataContext"
import {testWeatherData} from '../../../testutil/testWeatherData'

it("check weather current display renders", () => {
    render(
        <WeatherDataContextProvider>
            <WeatherCurrentDisplay testid="test"/>
        </WeatherDataContextProvider>
    )

    const WeatherCurrentDisplayElem = screen.getByTestId("test")
    expect(WeatherCurrentDisplayElem).toBeInTheDocument()
})

it("check it displays correct data", () => {
    const TestComponent = () => {
        const {setWeatherData} = useContext(WeatherDataContext)
        useEffect(() => {
            if(setWeatherData){
                setWeatherData(testWeatherData)
            }
        }, [])

        return(
            <WeatherCurrentDisplay testid="test"/>
        )
    }

    render(
        <WeatherDataContextProvider>
            <TestComponent/>
        </WeatherDataContextProvider>
    )

    const countryElem = screen.getByText(testWeatherData.location.country)
    const timeElem = screen.getByText(testWeatherData.location.localtime)
    const nameElem = screen.getByText(testWeatherData.location.name)
    const tempAndConditionElem = screen.getByText(`${testWeatherData.current.temp_c}°C, ${testWeatherData.current.condition.text}`)
    const imgElem = screen.getByRole("img")
    const feelsLikeElem = screen.getByText(`feels like ${testWeatherData.current.feelslike_c}°C`)
    const windElem = screen.getByText(`wind speed: ${testWeatherData.current.wind_mph} mph`)


    expect(countryElem).toBeInTheDocument()
    expect(timeElem).toBeInTheDocument()
    expect(nameElem).toBeInTheDocument()
    expect(tempAndConditionElem).toBeInTheDocument()
    expect(imgElem).toHaveAttribute("src", testWeatherData.current.condition.icon)
    expect(feelsLikeElem).toBeInTheDocument()
    expect(windElem).toBeInTheDocument()
})
