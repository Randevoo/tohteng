import React from "react";
import TripHeader from "./components/TripHeader";
import TripDay from "./components/TripDay";
import { Carousel } from "antd";

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
      <Carousel autoplay>
        {testImageUrls.map(url => (
          <img src={url} alt="tripPhotos"></img>
        ))}
      </Carousel>
      <TripHeader
        title={"2D1N Tokyo Shopping"}
        subtitle={"Public Tour"}
      ></TripHeader>
      <TripDay
        dayNumber={1}
        imageSource={testImageUrls[0]}
        description={testDesc}
      ></TripDay>
    </div>
  );
};

export default Main;
