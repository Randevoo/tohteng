import React from "react";
import TripHeader from "./components/TripHeader";
import TripDay from "./components/TripDay";
import TripProfie from "../Profile/components/TripProfile"
import { Carousel, Row, Col } from "antd";
import { Icon } from "antd";
import { Button, NavBar } from 'antd-mobile';

interface Props {}

const testImageUrls = [
  "https://www.littledayout.com/wp-content/uploads/04-merlion-park.jpg",
  "https://www.littledayout.com/wp-content/uploads/17-merlion-park.jpg"
];

const testDesc =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const Main: React.FC<Props> = () => {
  return (
    <div>
      <NavBar
        // leftContent="Menu"
        // rightContent
        mode="light"
        icon={<img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" className="am-icon am-icon-md" alt="" />}
        // onLeftClick={this.handleClick}
        className="top-nav-bar"
        style={{ marginBottom: '3px' }}
      >
        {/* Randevu */}
      </NavBar>
      
      <Carousel autoplay>
        {testImageUrls.map(url => (
          <img src={url} alt="tripPhotos"></img>
        ))}
      </Carousel>

      <TripHeader
        title={"2D1N Japan Kyoto Shrine Hopping + Spa"}
        subtitle={"Public Tour"}
        location={"JAPAN, KYOTO. SPA. SHRINE"}
      ></TripHeader>

      <TripProfie 
        message={"\"Hi, Hisako here. Experiece Kyoto with me, as I bring you around to hunt for hidden traditional Japanese eateries, and show you breath taking views within Kyoto. Food and Instragrammers, look out!\""} 
        name={"Hisako Sato"}
        age={"29"}
        gender={"Female"}
        languages={["Japanese", "Chinese", "English"]}
        rating={4}
        noOfreviews={328}
        picture={"https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-518740768.jpg"}
      />

      <TripDay
        dayNumber={1}
        imageSource={testImageUrls[0]}
        description={testDesc}
      ></TripDay>

      <TripDay
        dayNumber={2}
        imageSource={testImageUrls[0]}
        description={testDesc}
      ></TripDay>

      {/* Will add location later */}

      <Button>Cancellation</Button>
      <Button>Price Breakdown</Button>
      <Button>Contact Guide</Button>
      <Button>Report Listing</Button>

      {/* couldn't find a quick ui solution for footer, ignoring for now first  */}
      {/* <div className="payment" style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        S$210 per pax
      </div> */}
    </div>
  );
};

export default Main;
