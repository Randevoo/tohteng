import React from "react";
import { withRouter, useHistory } from "react-router";
import { List, Card } from "antd";
import "./TripTable.css";
import { History } from "history";
const { Meta } = Card;

export interface TripTableProps {}

interface CardData {
  history: History;
  title: string;
  imageUrl: string;
  link: string;
}

const testData = (history: History) => ({
  history,
  title: "lol",
  imageUrl: "lol",
  link: "/signup"
});

const renderCard = (data: CardData) => (
  <Card
    onClick={() => {
      console.log("clicked");
      data.history.push(data.link);
    }}
    className="TripCard"
    cover={
      <img
        alt="tripImage"
        src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555438068/shape/mentalfloss/istock_000001168352_small.jpg"
      />
    }
  >
    <Meta title="Trip title" description="Trip description" />
  </Card>
);

const TripTable: React.FC<TripTableProps> = () => {
  const history = useHistory();
  return (
    <div className="TripTable">
      <List
        className="TripTableList"
        itemLayout="vertical"
        bordered={true}
        dataSource={[testData(history), testData(history), testData(history)]}
        renderItem={renderCard}
      />
    </div>
  );
};

export default withRouter(TripTable);
