import React, { useState } from "react";
import { AutoComplete, Row, Col } from 'antd';
import { withRouter, RouteComponentProps } from "react-router";

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import "./SearchBar.css";

const SearchBar: React.FC<RouteComponentProps> = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <div className="SearchBar" 
      style={{
        marginTop: '1em',
        marginBottom: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      }}>
    {/* <div className="SearchBar" style={{ position: 'fixed', height: '0%', width: '100%' }}> */}
        <AutoComplete
          // dataSource={dataSource}
          style={{ width: '90%' }}
          // onSelect={onSelect}
          // onSearch={this.onSearch}
          placeholder="Japan, Kyoto"
        />
      <br />
      <p />
      {/* <Row>
        <Col span={8}>Filter</Col>
        <Col span={8}>Sort</Col>
        <Col span={8}>Dates</Col>
      </Row> */}
    </div>
  );
};

export default withRouter(SearchBar);