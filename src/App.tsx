import React, { useState } from "react";
import { Button, Row, Col } from "antd";

import "./App.css";
import SignUpBanner from "assets/SignUpBanner.jpg";
import SignUpFormModal from "./LandingPage/SignUpForm";
import Infographics from "./LandingPage/Infographics";
import MockUpWithSignUpLink from "./LandingPage/MockupWithSignUpLink";

const App: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <div className="App">
      <img src={SignUpBanner} className="SignUpBanner" alt="logo" />
      <Infographics />
      <MockUpWithSignUpLink setModalVisible={setModalVisible} />
      <SignUpFormModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
    </div>
  );
};

export default App;
