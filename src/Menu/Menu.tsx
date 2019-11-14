import React, { useState } from "react";
import { TabBar } from 'antd-mobile';
import { withRouter, RouteComponentProps } from "react-router";

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import "./Menu.css";

const Menu: React.FC<RouteComponentProps> = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <div className="Menu" style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="Search"
          key="Search"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selected={true}
          badge={1}
          // onPress={() => {
          //   this.setState({
          //     selectedTab: 'blueTab',
          //   });
          // }}
          data-seed="logId"
        >
        </TabBar.Item>

        <TabBar.Item
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
          />
          }
          title="Bookmark"
          key="Bookmark"
          badge={'new'}
          selected={false}
          // onPress={() => {
          //   this.setState({
          //     selectedTab: 'redTab',
          //   });
          // }}
          data-seed="logId1"
        >
        </TabBar.Item>

        <TabBar.Item
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
          />
          }
          title="Randevu"
          key="Randevu"
          dot
          selected={false}
          // onPress={() => {
          //   this.setState({
          //     selectedTab: 'greenTab',
          //   });
          // }}
        >
        </TabBar.Item>

        <TabBar.Item
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
          />
          }
          title="Notification"
          key="Notification"
          selected={false}
          // onPress={() => {
          //   this.setState({
          //     selectedTab: 'yellowTab',
          //   });
          // }}
        >
        </TabBar.Item>

        <TabBar.Item
          icon={
          <div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
          />
          }
          title="Profile"
          key="Profile"
          selected={false}
          // onPress={() => {
          //   this.setState({
          //     selectedTab: 'yellowTab',
          //   });
          // }}
        >
        </TabBar.Item>
      </TabBar>
    </div>
  );
};

export default withRouter(Menu);