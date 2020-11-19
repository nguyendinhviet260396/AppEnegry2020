import  AxiosService from '../services/axiosService';
export const getListWeather=(params)=>{
    return AxiosService.get(`http://api.openweathermap.org/data/2.5/weather?q=${params.params}&appid=5b7aced2e33ce6c8cf6a0e7cb1b1aa69&units=metric`)
}
