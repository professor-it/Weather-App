import React from 'react'
import classes from './Sidebar.module.scss'
import Search from "./Search/Search";
import Image from "./Image/Image";
import Temp from "./Temp/Temp";
import {useTypesSelector} from "../../hooks/useTypesSelector";

import LocationOnIcon from '@material-ui/icons/LocationOn';

interface Sidebar {
  converterCtoF: boolean;
}

const Sidebar: React.FC<Sidebar> = ({converterCtoF}) => {
  const {date, city} = useTypesSelector(state => state.weather)

  return (
    <div className={classes.container}>
      <Search/>
      <Image src={`https://www.metaweather.com/static/img/weather/png/${date.consolidated_weather[0].weather_state_abbr}.png`}/>
      <Temp temp={date.consolidated_weather[0].the_temp} converterCtoF={converterCtoF}/>
      <div className={classes.weatherState}>
        {date.consolidated_weather[0].weather_state_name}
      </div>
      <div className={classes.date}>
        Today – {new Date(date.consolidated_weather[0].applicable_date).toDateString().substr(0, 10)}
      </div>
      <div className={classes.location}>
        <LocationOnIcon/> {city}
      </div>
    </div>
  )
}

export default Sidebar