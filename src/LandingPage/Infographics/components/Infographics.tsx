import React from "react";
import { Row, Col } from "antd";
import PlanItinerary from "assets/PlanItinerary.jpg";
import ListTour from "assets/ListTour.jpg";
import ShowTravelers from "assets/ShowTravelers.jpg";
import "./Infographics.css";

const Infographics: React.FC = () => {
  return (
    <>
      <Row className="InfoRow" type="flex" justify="space-around">
        <Col span={6} className="InfoCol">
          <img src={PlanItinerary} className="InfoImage" alt="logo" />
          <p className="InfoText">Plan Your Itinerary</p>
          <p className="InfoText">
            Plan an itinerary you think people will enjoy. Bring travelers
            places only locals know. You set the place, time and budget. Work in
            your free time.
          </p>
        </Col>
        <Col span={6} className="InfoCol">
          <img src={ListTour} className="InfoImage" alt="logo" />
          <p className="InfoText">List Your Tour</p>
          <p className="InfoText">
            List your service up on our platform <b>Randevu</b>, and wait for
            people to book you. You determine how many people and how much to be
            paid for your time.
          </p>
        </Col>
        <Col span={6} className="InfoCol">
          <img src={ShowTravelers} className="InfoImage" alt="logo" />
          <p className="InfoText">Show Travellers The True Singapore</p>
          <p className="InfoText">
            Once the booking is confirmed, you are responsible to show
            travellers around the country. Show them a different side of
            Singapore!
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Infographics;
