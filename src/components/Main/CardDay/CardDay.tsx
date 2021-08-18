import React from "react";
import classes from './CardDay.module.scss';
import Image from "../../Sidebar/Image/Image";

interface CardDay {
  day: string;
  maxTemp: number;
  minTemp: number;
  img: string;
  converterCtoF: boolean;
  i: number
}

const CardDay: React.FC<CardDay> = ({day, maxTemp, minTemp, img, converterCtoF, i}) => {
  return (
    <div className={classes.cardDay}>
      <div className={classes.dayTitle}>
        {
          i === 0 ?
          'Tomorrow' : new Date(day).toDateString().substr(0, 10)
        }
      </div>
      <Image src={img}/>
      <div className={classes.wrapperTemp}>
        <div className={classes.maxTemp}>
          {!converterCtoF
            ? Math.trunc(maxTemp)
            : Math.trunc(maxTemp * (9 / 5) + 32)}
          <i>{!converterCtoF ? "°C" : "°F"}</i>
        </div>
        <div className={classes.minTemp}>
          {!converterCtoF
            ? Math.trunc(minTemp)
            : Math.trunc(minTemp * (9 / 5) + 32)}
          <i>{!converterCtoF ? "°C" : "°F"}</i>
        </div>
      </div>
    </div>
  )
}

export default CardDay