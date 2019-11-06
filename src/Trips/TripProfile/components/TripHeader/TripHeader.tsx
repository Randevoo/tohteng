import React from "react";
import { Button, Row, Col } from "antd";
import "./TripHeader.less";

interface Props {
  title: string;
  subtitle: string;
  location: string;
}

const TripHeader: React.FC<Props> = ({ title, subtitle, location }) => {
  return (
    <div style={{ 
      marginRight: '10px',
      marginLeft: '10px',
      marginTop: '6px',
      marginBottom: '6px',
    }}>
      <span className="Title">{title}</span>
      <div className="Subtitle">
        <Row>
          <span className="SubtitleText">{subtitle}</span>
        </Row>
        <Row>
          <Col span={18}>
            <span className="SubtitleLocation">{location}</span>
          </Col>
          <Col span={6}>
            <Button type="primary" size="default">
              Share
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TripHeader;
