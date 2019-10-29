import React from "react";
import { Button } from "antd";
import "./TripHeader.less";

interface Props {
  title: string;
  subtitle: string;
}

const TripHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <span className="Title">{title}</span>
      <div className="Subtitle">
        <span className="SubtitleText">{subtitle}</span>
        <Button type="primary" size="large">
          Share
        </Button>
      </div>
    </>
  );
};

export default TripHeader;
