import React from "react";

import "./User.less";
import { Row, Col } from "antd";
import { Flex } from "antd-mobile";

interface Props {
  name: string;
  age: string;
  gender: string;
  languages: string[];
  rating: number;
  noOfreviews: number;
  picture: string;
}

const User: React.FC<Props> = ({
  name,
  age,
  gender,
  languages,
  rating,
  noOfreviews,
  picture
}) => {
  return (
    <>
      <Flex justify="start">
        <img src={picture} className="Userimage" alt="Avatar" />
      </Flex>
      <Flex justify="between">
        <span className="Username">{name}</span>
        <span className="Reviews">{noOfreviews} Reviews</span>
      </Flex>
      <Flex justify="start">
        <span className="Age-gender">
          {age} {gender}
        </span>
      </Flex>
      <Flex justify="start">
        <span className="Languages">{languages.join(". ")}</span>
      </Flex>
    </>
  );
};

export default User;
