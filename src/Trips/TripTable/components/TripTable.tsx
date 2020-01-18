import React, { useState, useEffect } from "react";
import { History } from "history";
import { withRouter, useHistory } from "react-router";
import { ListView, List } from "antd-mobile";
import Trip from "Trip/models/Trip";

import "./TripTable.css";
import TripsCard from "Trips/TripsCard";
const Item = List.Item;

export interface TripTableProps {}

const createTestData = () => ({
  imgUrls: [
    "https://www.littledayout.com/wp-content/uploads/04-merlion-park.jpg",
    "https://www.littledayout.com/wp-content/uploads/17-merlion-park.jpg"
  ],
  title: "Day Tour of Kyoto Fushimi Inari Shrine",
  type: "Single Tour",
  location: "Some place",
  tripDays: []
});

const testData = [
  createTestData(),
  createTestData(),
  createTestData(),
  createTestData(),
  createTestData()
];

const renderCard = (
  history: History,
  rowData: any,
  sectionId: React.ReactText,
  rowId: React.ReactText
) => {
  const data = testData[rowId as number];
  return (
    <Item
      arrow="horizontal"
      onClick={() => {
        console.log("Item clicked");
      }}
    >
      <TripsCard
        title={data.title}
        type={data.type}
        cost={"160"}
        imgUrls={data.imgUrls}
        reviewNo={279}
      />
    </Item>
  );
};

const TripTable: React.FC<TripTableProps> = () => {
  const history = useHistory();
  const initDataSource = new ListView.DataSource({
    getRowData: (dataBlob: any, sectionId: number, rowId: number) =>
      dataBlob[rowId],
    rowHasChanged: (row1: Trip, row2: Trip) => row1.title !== row2.title
  });

  const [dataSource, updateDataSource] = useState(initDataSource);
  useEffect(() => {
    updateDataSource((dataSource: any) => dataSource.cloneWithRows(testData));
  }, []);

  return (
    <ListView
      className="TripTableList"
      dataSource={dataSource}
      renderRow={(rowData, sectionId, rowId) =>
        renderCard(history, rowData, sectionId, rowId)
      }
      useBodyScroll
    />
  );
};

export default withRouter(TripTable);
