import React from "react";
// antd Icon used as it supports more icons out of the box
import { Icon } from "antd";
import { Card, WingBlank, WhiteSpace, Flex, Carousel } from "antd-mobile";

import "./TripsCard.less";

interface Props {
  title: string;
  type: string;
  cost: string;
  imgUrls: string[];
  reviewNo: number;
}

const TripsCard: React.FC<Props> = ({
  title,
  type,
  cost,
  imgUrls,
  reviewNo
}) => {
  return (
    <WingBlank>
      <Card>
        <Card.Header title={title} />
        <Card.Body>
          <Carousel className="TripImageCarousel" infinite autoplay>
            {imgUrls.map(url => (
              <img
                key={url}
                className="TripPhotos"
                src={url}
                alt="tripPhotos"
              ></img>
            ))}
          </Carousel>
          <WhiteSpace />
          <span>{`S$${cost} per pax`}</span>
          <WhiteSpace />
          <span>{type}</span>
          <WhiteSpace />
          <Flex justify="between">
            <span>{`${reviewNo} Reviews`}</span>
            <div>
              <Icon type="heart" theme="filled" />
              <Icon type="heart" theme="filled" />
              <Icon type="heart" theme="filled" />
              <Icon type="heart" theme="filled" />
              <Icon type="heart" theme="outlined" />
            </div>
          </Flex>
        </Card.Body>
      </Card>
    </WingBlank>
  );
};

export default TripsCard;
