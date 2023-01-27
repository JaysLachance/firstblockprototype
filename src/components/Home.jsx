import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, HeatMapOutlined, FallOutlined, MessageOutlined, NotificationOutlined } from '@ant-design/icons';
import './Home.css';
import ListItem from './ListItem';


const { Sider } = Layout;

const Home = () => {
  return (
    <Layout>
      <Sider width={400} className="site-sider">
        <div className="sider-title">First Block</div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Pooling
          </Menu.Item>
          <Menu.Item key="3" icon={<HeatMapOutlined />}>
            Heat
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />}>
            Notifications
          </Menu.Item>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Account
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <div className="content-container">
            <ListItem/>
            <ListItem/>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
      </Layout>
    </Layout>
  );
}
export default Home;
