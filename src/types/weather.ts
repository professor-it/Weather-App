export interface WeatherState {
    date: any;
    city: string;
    cities: any[];
    id: number | null;
    converter: boolean;
    loading: boolean;
    error: null | string;
}

export enum WeatherActionTypes {
    FETCH_WEATHER = 'FETCH_WEATHER',
    FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
    FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
    FETCH_WEATHER_CITY = 'FETCH_WEATHER_CITY',
    FETCH_WEATHER_CITIES = 'FETCH_WEATHER_CITIES',
    CONVERTER = 'CONVERTER',
}

interface FetchWeatherAction {
    type: WeatherActionTypes.FETCH_WEATHER
}

interface FetchWeatherSuccessAction {
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
    payload: any;
}

interface FetchWeatherErrorAction {
    type: WeatherActionTypes.FETCH_WEATHER_ERROR;
    payload: string;
}

interface FetchWeatherCityAction {
    type: WeatherActionTypes.FETCH_WEATHER_CITY;
    city: string;
    id: number;
}

interface FetchWeatherCitiesAction {
    type: WeatherActionTypes.FETCH_WEATHER_CITIES;
    payload: any[];
}

interface ConverterAction {
    type: WeatherActionTypes.CONVERTER;
    payload: boolean;
}

export type WeatherAction = FetchWeatherAction | FetchWeatherSuccessAction | FetchWeatherErrorAction | FetchWeatherCityAction | FetchWeatherCitiesAction | ConverterAction
