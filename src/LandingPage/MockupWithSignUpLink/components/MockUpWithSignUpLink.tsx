import React from "react";
import { Row, Col, Button } from "antd";
import "./MockUpWithSignUpLink.css";
import MockUp from "assets/Mockup.jpg";

interface Props {
  setModalVisible: (isModalVisible: boolean) => void;
}

const MockUpWithSignUpLink: React.FC<Props> = ({ setModalVisible }) => {
  return (
    <>
      <Row type="flex" justify="space-around" align="middle" className="Footer">
        <Col span={12}>
          <img className="Mockup" src={MockUp} />
        </Col>
        <Col span={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="FooterText">
              <b>Join Us In Our Journey</b>
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="SignUpButton"
              size="large"
              icon="mail"
              onClick={() => setModalVisible(true)}
            >
              <span className="SignUpButtonText">
                Help Us Complete The Sign-up Form!
              </span>
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MockUpWithSignUpLink;
