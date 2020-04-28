import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import {indigo} from '@material-ui/core/colors';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default class MyAppBar extends React.Component{
  getName(){
    if (this.props.user.name)
      return this.props.user.name;
    return "";
  }
  title() {
    return this.props.user.jwt ? 'Bienvenid@ '+ this.getName() : 'Places';
  }
  render(){
    return(
      <AppBar style={{'display':'contents'}}>
        <Toolbar style={{'backgroundColor':indigo[600]}}>
          <Typography variant="h6" onClick ={this.props.goHome} className="Title-AppBar">
            {this.title()}
          </Typography>
            {this.props.user.jwt? <LogoutButton logout = {this.props.logout}/> : <LoginButton/>}
        </Toolbar>
      </AppBar>
    )
  }
}
