import React from "react";

import Quote from "../Quotes";
import Profile from "../User";

import "./TripProfile.less";

interface Props {
  message: string;
  name: string;
  age: string;
  gender: string;
  languages: string[];
  rating: number;
  noOfreviews: number;
  picture: string;
}

const TripProfile: React.FC<Props> = ({
  message,
  name,
  age,
  gender,
  languages,
  rating,
  noOfreviews,
  picture
}) => {
  return (
    <div className="TripProfile">
      <Quote message={message} />
      <Profile
        name={name}
        age={age}
        gender={gender}
        languages={languages}
        rating={rating}
        noOfreviews={noOfreviews}
        picture={picture}
      />
    </div>
  );
};

export default TripProfile;
