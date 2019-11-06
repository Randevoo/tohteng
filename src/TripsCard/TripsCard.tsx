import React, { useState } from "react";
import { Card, Col, Row, Icon } from 'antd';
import { withRouter, RouteComponentProps } from "react-router";

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import "./TripsCard.css";

interface Props {
  title: string;
  description: string;
  cost: string;
  img: string;
  reviewNo: number;
}

const TripsCard: React.FC<Props> = ({ title, description, cost, img, reviewNo }) => {
  // const [isModalVisible, setModalVisible] = useState(false);
  return (
    <div className="TripsCard">
      <Card style={{
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '100'}}
        cover={<img alt="example" src={img} />}
      >
        <Card.Meta title={title} />
        <p></p>
        <div style={{marginBottom: '0'}}>
          <Card.Meta description={description} />
          <Row>
            <Col span={10}><Card.Meta description={`S$${cost} per pax`} /></Col>
            <Col span={6}>
              <Icon type="heart" theme="filled" />
              <Icon type="heart" theme="filled"  />
              <Icon type="heart" theme="filled"  />
              <Icon type="heart" theme="filled"  />
              <Icon type="heart" theme="outlined"  />
            </Col>
            <Col span={8}>{reviewNo} Reviews</Col>
          </Row>
        </div>
      </Card>,
    </div>
  );
};

export default TripsCard;