import { weatherData } from "./weather_data"

export async function GET(){
    return Response.json(weatherData)
}
export async function POST(request:Request){
    const location = await request.json()
    weatherData.pop()

    const getWeatherData = async(location:string) => {

        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}}`)
        return await res.json()
    }   
    weatherData.push(await getWeatherData(location))
    return Response.json(weatherData)
}
