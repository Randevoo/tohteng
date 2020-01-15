import React from "react";
// antd Icon used as it supports more icons out of the box
import { Icon } from "antd";
import { Card, WingBlank, WhiteSpace, Flex } from "antd-mobile";

import "./TripsCard.less";

interface Props {
  title: string;
  description: string;
  cost: string;
  img: string;
  reviewNo: number;
}

const TripsCard: React.FC<Props> = ({
  title,
  description,
  cost,
  img,
  reviewNo
}) => {
  return (
    <WingBlank>
      <Card>
        <Card.Header title={title} />
        <Card.Body>
          <img className="TripImage" src={img} />
          <WhiteSpace />
          <span>{`S$${cost} per pax`}</span>
          <WhiteSpace />
          <span>{description}</span>
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
