export type WeatherDataType = {
    current:CurrentDataType,
    location:LocationDataType,
    forecast:ForecastDataType
}

export type CurrentDataType = {
    temp_c:number,
    condition:{
        text:string,
        icon:string
    },
    wind_mph:number,
    feelslike_c:number
}
export type LocationDataType = {
    name:string,
    country:string,
    localtime:string
}

export type ForecastDataType = {
    hour:HourDataType[]
}

export type HourDataType = {
    time:string,
    temp_c:number,
    condition:{
        text:string,
        icon:string,
    },
    wind_mph:number,
}