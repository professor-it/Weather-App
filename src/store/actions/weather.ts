import {WeatherAction, WeatherActionTypes} from "../../types/weather";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchCity = (querySearch:string) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      const res = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${querySearch}`)
      dispatch({type: WeatherActionTypes.FETCH_WEATHER_CITIES, payload: res.data})
    } catch (e) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_ERROR,
        payload: 'Произошла ошибка при загрузке данных'
      })
    }
  }
}

export const setCity = (city: string, id: number) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_CITY,
        city: city,
        id: id
      })
    } catch (e) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_ERROR,
        payload: 'Произошла ошибка при загрузке данных'
      })
    }
  }
}

export const fetchData = (id: number | null) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({type: WeatherActionTypes.FETCH_WEATHER})
      const res = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${id}/`)
      await dispatch({type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: res.data})
    } catch (e) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_ERROR,
        payload: 'Произошла ошибка при загрузке данных'
      })
    }
  }
}

export const setConverter = (conv: boolean) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    dispatch({
      type: WeatherActionTypes.CONVERTER,
      payload: conv
    })
  }
}