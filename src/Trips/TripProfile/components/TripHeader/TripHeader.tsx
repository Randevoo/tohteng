import React from "react";
import "./TripHeader.less";
import { WingBlank, Button, WhiteSpace } from "antd-mobile";

interface Props {
  title: string;
  subtitle: string;
  location: string;
}

const TripHeader: React.FC<Props> = ({ title, subtitle, location }) => {
  return (
    <>
      <span className="Title">{title}</span>
      <WhiteSpace />
      <span className="SubtitleText">{subtitle}</span>
      <WhiteSpace />
      <span className="SubtitleLocation">{location}</span>
      <WhiteSpace />
      <Button inline size="small" type="primary">
        Share
      </Button>
    </>
  );
};

export default TripHeader;
