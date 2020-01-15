import React from "react";

import "./TripDay.less";
import { WhiteSpace } from "antd-mobile";

interface Props {
  dayNumber: number;
  imageSource: string;
  description: string;
}

const TripDay: React.FC<Props> = ({ dayNumber, imageSource, description }) => {
  return (
    <div className="TripDay">
      <span className="DayNumber">Day {dayNumber}</span>
      <WhiteSpace />
      <img className="DayImg" src={imageSource} alt="dayImg"></img>
      <p className="Desc">{description}</p>
    </div>
  );
};

export default TripDay;
