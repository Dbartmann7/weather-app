import React from "react"
import WeatherHourDisplay from "./WeatherHourDisplay"
import {render, screen} from "@testing-library/react"
import { HourDataType } from "../../../contexts/WeatherDataTypes";
import {testWeatherData} from '../../../testutil/testWeatherData'


beforeAll(() => {
    
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 500,
    });
    window.dispatchEvent(new Event('resize'));
});

it("check hour component renders", () => {
    const testHourData = testWeatherData.forecast.hour[0]
    render(<WeatherHourDisplay hourData={testHourData}/>)
    const timeElem = screen.getByText(testHourData.time.substring(testHourData.time.length - 5))
    const tempAndConditionTextElem = screen.getByText(`${testHourData.temp_c}°C, ${testHourData.condition.text}`)
    const imgElem = screen.getByRole("img")
    const windSpeedElem = screen.getByText(`wind speed: ${testHourData.wind_mph}mph`)

    expect(timeElem).toBeInTheDocument()
    expect(tempAndConditionTextElem).toBeInTheDocument()
    expect(imgElem).toHaveAttribute('src', testHourData.condition.icon)
    expect(windSpeedElem).toBeInTheDocument()
})

