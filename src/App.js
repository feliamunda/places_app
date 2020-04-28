import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { TransitionGroup,CSSTransition } from 'react-transition-group';
import {withRouter} from 'react-router-dom'

import './App.css';
import Navigation from './components/navigation/Navigation'

class App extends Component {
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <Navigation/>
          <TransitionGroup>
            <CSSTransition classNames="left-out" timeout={300} key={this.props.location.pathname.split('/')[0]}>
              {this.props.children}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
