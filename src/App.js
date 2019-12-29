import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import LiftingPage from "./components/pages/LiftingPage";
import GamePlanPage from "./components/pages/GamePlanPage";
import Logo from "./images/Hcjj.png";
import { Button, Slider, Switch, Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => (
  // <div className='ui container'> 
  //   <Route path="/" exact component={HomePage} />
  //   <Route path="/login" exact component={LoginPage} />
  //   <Route path="/lifting" exact component={LiftingPage} />
  //   <Route path="/gameplan" exact component={GamePlanPage} />
  // </div>
    // <Layout>
    //   <Route path="/" exact component={HomePage} />
    //   <Route path="/login" exact component={LoginPage} />
    //   <Route path="/lifting" exact component={LiftingPage} />
    //   <Route path="/gameplan" exact component={GamePlanPage} />

    // </Layout>

/* <Layout>
  <Header>header</Header>
  <Layout>
    <Sider>left sidebar</Sider>
    <Content>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/lifting" exact component={LiftingPage} />
      <Route path="/gameplan" exact component={GamePlanPage} />
    </Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <Footer>footer</Footer>
</Layout> */
  <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <img src={Logo} width={200} height={200} />
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 10, textAlign:"center"  }}> BJJ Gameplan Crafter </Header>
        <Content style={{ margin: '16px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '832px' }}>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/lifting" exact component={LiftingPage} />
            <Route path="/gameplan" exact component={GamePlanPage} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Combat Engineer Inc ©2019 Created by Brent Garcia
        </Footer>
      </Layout>
    </Layout>
);

export default App;
