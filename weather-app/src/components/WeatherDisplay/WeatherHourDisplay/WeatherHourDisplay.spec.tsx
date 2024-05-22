import React from "react"
import WeatherHourDisplay from "./WeatherHourDisplay"
import {render, screen} from "@testing-library/react"
import { HourDataType } from "@/contexts/WeatherDataTypes";

const testHourData:HourDataType = {
    time: "2024-05-20 00:00",
    temp_c: 12.3,
    condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png"
    },
    wind_mph: 5.8,
}

beforeAll(() => {
    
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 500,
    });
    window.dispatchEvent(new Event('resize'));
});

it("check hour component renders", () => {
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

