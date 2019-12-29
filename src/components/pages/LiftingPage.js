import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import * as actions from '../../actions/auth'
import { Button, Slider, Switch, Layout, Menu, Breadcrumb, Icon } from 'antd';

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;


// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;

// submit = (data) => 
//     this.props.login(data).then(() => this.props.history.push("/"));

const LiftingPage = ( { isAuthenticated, logout }) => {

  // const [visible, setVisible] = useBooleanKnob({ name: 'visible' })

  return(
  <div>
    
    <h1 style= {{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Lifting Page</h1>
    <h2 style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}> YOUR WEIGHT IS: 160 Pounds </h2>

    <div style= {{height:500}}> 
      <div style= {{ height: 50}}><b>The following are your recommended lifting benchmarks for a bluebelt competitor:  (Subject to change)</b></div>
      <div> Bench Press: 170 </div>
      <div> Squat: 195 </div>
      <div> Deadlift: 235 </div>
      <div> Row: 125 </div>
      <div> Clean and Jerk: 140 </div>
      <div> Power Snatch: 105 </div>
    </div>
    {/* <Button type="primary" onClick={() => }> Weightlifting Benchmark Calculator </Button> */}
    <Link to ="/"> Homepage </Link>
    <div style= {{height: 20}}> </div>
    {isAuthenticated ? <button onClick= {() => logout()}>Logout</button> : <Link to ="/login">Login</Link>}

    
  </div>
)};

LiftingPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};


function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(LiftingPage);