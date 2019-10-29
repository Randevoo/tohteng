import React, { useState } from "react";

import "./LandingPage.css";
import SignUpBanner from "assets/SignUpBanner.jpg";
import SignUpFormModal from "./SignUpForm";
import Infographics from "./Infographics";
import MockUpWithSignUpLink from "./MockupWithSignUpLink";
import { withRouter, RouteComponentProps } from "react-router";

const LandingPage: React.FC<RouteComponentProps> = () => {
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

export default withRouter(LandingPage);
