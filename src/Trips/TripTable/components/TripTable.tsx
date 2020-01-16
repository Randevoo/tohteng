import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { ListView } from "antd-mobile";
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

const testData = [createTestData(), createTestData(), createTestData()];

const renderCard = (
  rowData: any,
  sectionId: React.ReactText,
  rowId: React.ReactText
) => {
  const data = testData[rowId as number];
  return (
    <TripsCard
      title={data.title}
      type={data.type}
      cost={"160"}
      imgUrls={data.imgUrls}
      reviewNo={279}
    />
  );
};

const TripTable: React.FC<TripTableProps> = () => {
  const initDataSource = new ListView.DataSource({
    rowHasChanged: (row1: Trip, row2: Trip) => row1.title !== row2.title
  });

  const [dataSource, updateDataSource] = useState(initDataSource);
  useEffect(() => {
    updateDataSource(dataSource.cloneWithRows(testData));
  }, [testData]);

  return (
    <ListView
      className="TripTableList"
      dataSource={dataSource}
      renderRow={renderCard}
    />
  );
};

export default withRouter(TripTable);
