import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import * as actions from '../../actions/auth'
import { Button, Radio, Icon, Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


// submit = (data) => 
//     this.props.login(data).then(() => this.props.history.push("/"));

const HomePage = ( { isAuthenticated, logout }) => (
  <div>
    <h1 style= {{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Welcome to CJJ Planner</h1>

    
    <Link to ="/lifting">Lifting Calculator</Link> 
    <div style= {{height:10}}> </div>
    <Link to ="/gameplan">Game Plan Maker</Link>

    <div style= {{height:100}}> </div> 
    {isAuthenticated ? <Button type="primary" onClick= {() => logout()}>Logout</Button> : <Link to ="/login">Login</Link>}

  </div>
  
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};


function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);