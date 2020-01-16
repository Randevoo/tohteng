import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router";
import { ListView } from "antd-mobile";
import { History } from "history";
import Trip from "Trip/models/Trip";

import "./TripTable.css";
import TripsCard from "Trips/TripsCard";

export interface TripTableProps {}

const createTestData = () => ({
  imgUrls: [],
  title: "Day Tour of Kyoto Fushimi Inari Shrine",
  type: "Single Tour",
  location: "Some place",
  tripDays: []
});

const renderCard = (data: Trip) => (
  <TripsCard
    title={data.title}
    type={data.type}
    cost={"160"}
    img={
      "https://www.planetware.com/photos-large/JPN/japan-kyoto-fushimi-inari-taisha-shrine.jpg"
    }
    reviewNo={279}
  />
);
const testData = [createTestData(), createTestData(), createTestData()];

const TripTable: React.FC<TripTableProps> = () => {
  const initDataSource = new ListView.DataSource({
    rowHasChanged: (row1: Trip, row2: Trip) => row1.title != row2.title
  });

  const [dataSource, updateDataSource] = useState(initDataSource);
  useEffect(() => {
    updateDataSource(dataSource.cloneWithRows(testData));
  }, [testData]);

  return (
    <div className="TripTable">
      <ListView
        className="TripTableList"
        dataSource={dataSource}
        renderRow={renderCard}
      />
    </div>
  );
};

export default withRouter(TripTable);
