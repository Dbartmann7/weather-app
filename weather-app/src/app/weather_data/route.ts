import { weatherData } from "./weather_data"

export async function GET(){
    return Response.json(weatherData)
}
export async function POST(request:Request){
    const location = await request.json()
    weatherData.pop()

    const getWeatherData = async(location:string) => {

        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=1&aqi=no&alerts=no}`)
        return await res.json()
    }   
    weatherData.push(await getWeatherData(location))
    return Response.json(weatherData)
}
