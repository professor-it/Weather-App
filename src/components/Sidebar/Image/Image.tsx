import React from "react";
import classes from "./Image.module.scss";

interface Image {
  src: string;
}

const Image: React.FC<Image> = ({src}) => {
  return (
    <div className={classes.img}>
      <img src={src} alt={src}/>
    </div>
  )
}

export default Image