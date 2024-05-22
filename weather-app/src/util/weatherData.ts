import axios, { AxiosError } from "axios"

export const fetchWeatherData = async(location:string) => {
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_PATH}/api/weather_data`, {
                params:{
                    location:location
                }
            }
        )
        console.log(res.data)
        return res.data
    }catch(error){
        if(axios.isAxiosError(error)){
            return {error: {status:error.response?.status, message:error.response?.statusText}}
        }else{
            console.log(error)
        }
        
    }
}

export default {fetchWeatherData}