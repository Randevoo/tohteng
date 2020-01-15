import React from "react";

import Quote from "../UserQuotes";
import Profile from "../UserProfile/User";

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

const UserTripProfile: React.FC<Props> = ({
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
    <>
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
    </>
  );
};

export default UserTripProfile;
