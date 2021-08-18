import {WeatherAction, WeatherActionTypes, WeatherState} from '../../types/weather'

const initialState: WeatherState = {
    date: [],
    city: 'London',
    cities: [],
    id: 44418,
    loading: true,
    error: null
}

const weatherReducer = (state = initialState, action: WeatherAction):WeatherState => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER:
            return {...state, loading: true}
        case WeatherActionTypes.FETCH_WEATHER_CITY:
            return {...state, city: action.city, id: action.id}
        case WeatherActionTypes.FETCH_WEATHER_CITIES:
            return {...state, cities: action.payload}
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {...state, loading: false, date: action.payload}
        case WeatherActionTypes.FETCH_WEATHER_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}

export default weatherReducer