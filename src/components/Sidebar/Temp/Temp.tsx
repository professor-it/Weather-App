import React from "react";
import classes from "./Temp.module.scss";

interface Temp {
  converterCtoF: boolean,
  temp: number
}

const Temp: React.FC<Temp> = ({converterCtoF, temp}) => {
  return (
    <div className={classes.temp}>
      {!converterCtoF
        ? Math.trunc(temp)
        : Math.trunc(temp * (9 / 5) + 32)}
      <i>{!converterCtoF ? "°C" : "°F"}</i>
    </div>
  )
}

export default Temp