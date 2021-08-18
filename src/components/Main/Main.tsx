import React from "react";
import classes from './Main.module.scss'
import CardDay from "./CardDay/CardDay";
import {useTypesSelector} from "../../hooks/useTypesSelector";

import NavigationIcon from '@material-ui/icons/Navigation';

interface Main {
  converterCtoF: boolean;
}

const Main: React.FC<Main> = ({converterCtoF}) => {
  const {date} = useTypesSelector(state => state.weather)

  return (
    <div className={classes.container}>
      <div className={classes.days}>
        {date.consolidated_weather.map((item: any, index: number) => {
          if (index <= 4) {
            return (
              <CardDay
                key={item.id}
                day={item.applicable_date}
                i={index}
                minTemp={item.min_temp}
                maxTemp={item.max_temp}
                img={`https://www.metaweather.com/static/img/weather/png/${item.weather_state_abbr}.png`}
                converterCtoF={converterCtoF}/>
            )
          }
        })}
      </div>
      <div className={classes.title}>Today’s Hightlights</div>
      <div className={classes.hightlights}>
        <div className={classes.boxModel1}>
          <div className={classes.titleBox}>Wind status</div>
          <div className={classes.num}>
            {Math.trunc(date.consolidated_weather[0].wind_speed)}
            <span>mph</span>
          </div>
          <div className={classes.wind}>
            <div className={classes.windDirection}>
              <NavigationIcon fontSize="small"/>
            </div>
            {date.consolidated_weather[0].wind_direction_compass}
          </div>
        </div>
        <div className={classes.boxModel1}>
          <p className={classes.titleBox}>Humidity</p>
          <p className={classes.num}>
            {date.consolidated_weather[0].humidity}
            <span>%</span>
          </p>
          <div className={classes.humidity_bar}>
            <div className={classes.values}>
              <i>0</i>
              <i>50</i>
              <i>100</i>
            </div>
            <div className={classes.progress_wrap}>
              <div
                className={classes.bar}
                style={{width: `${date.consolidated_weather[0].humidity}%`}}
              ></div>
            </div>
            <div className={classes.percent}>
              <i>%</i>
            </div>
          </div>
        </div>

        <div className={classes.boxModel1}>
          <p className={classes.titleBox}>Visibility</p>
          <p className={classes.num}>
            {date.consolidated_weather[0].visibility.toFixed(1)}
            <span>mph</span>
          </p>
        </div>
        <div className={classes.boxModel1}>
          <p className={classes.titleBox}>Air Pressure</p>
          <p className={classes.num}>
            {date.consolidated_weather[0].air_pressure}
            <span>mb</span>
          </p>
        </div>
      </div>
      <div className={classes.author}>
        created by – Dima Nikolaenko
      </div>
    </div>
  )
}

export default Main