import React from "react";

import "./User.less";
import { Row, Col } from "antd";

interface Props {
  name: string;
  age: string;
  gender: string;
  languages: string[];
  rating: number;
  noOfreviews: number;
  picture: string;
}

const User: React.FC<Props> = ({ name, age, gender, languages, rating, noOfreviews, picture }) => {
  return (
    <div className="User">
      <Row>
        <Col span={5}>
          <img src={picture} className="Userimage" alt="Avatar"/>
        </Col>
        <Col span={16}>
          <span className="Username">{name}</span>
          <span className="Reviews">{noOfreviews} Reviews</span>
        </Col>
        <Col span={16}>
          <span className="Age-gender">{age} {gender}</span>
        </Col>
        <Col span={16}>
          <span className="Languages">{languages.join('. ')}</span>
        </Col>
      </Row>
      {/* Ignoring rating first as I will need to for loop and I will have to google that. */}
    </div>
  );
};

export default User;
