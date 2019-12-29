import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import * as actions from '../../actions/auth'
import { Button, Radio, Icon } from 'antd';


// submit = (data) => 
//     this.props.login(data).then(() => this.props.history.push("/"));

const GamePlanPage = ( { isAuthenticated, logout }) => (
  <div>
    <h1 style= {{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Game Plan Maker</h1>
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
    <Link to ="/"> To Homepage </Link>
    <div style= {{height: 20}}> </div>
    {isAuthenticated ? <button onClick= {() => logout()}>Logout</button> : <Link to ="/login">Login</Link>}

    
  </div>
);

GamePlanPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};


function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(GamePlanPage);