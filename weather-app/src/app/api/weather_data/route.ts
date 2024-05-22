import { NextRequest, NextResponse } from "next/server"

export async function GET(request:NextRequest){
    const location = request.nextUrl.searchParams.get("location")

    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=1&aqi=no&alerts=no}`)
    const data = await res.json()
    
    if(data.error){
        if(res.status === 400){
            return NextResponse.json({}, {status:res.status, statusText:"invalid location"})
        }
        return NextResponse.json({}, {status:res.status, statusText:data.error.message})
    }
          
    return NextResponse.json({weatherData:data}, {status:res.status})
}