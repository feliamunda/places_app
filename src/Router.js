import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Place from './pages/Place';
import NewPlace from './pages/places/NewPlace';
import App from './App'

class Router extends React.Component{

  signedInRoutes(){
    if(this.props.user.jwt){
      return(
        <Route path="/new" component={NewPlace} />
      );
    }
  }
  home(){
    if(this.props.user.jwt) return Dashboard;
    return Home;

  }
  render(){
    return(
      <ConnectedRouter history={this.props.history}>
        <App>
          <Switch>
            <Route exact path = "/" component = {this.home()}/>
            <Route path = "/lugares/:slug" component = {Place}/>
            <Route path = "/login" component = {Login}/>
            <Route path = "/signup" component = {Login}/>
            {this.signedInRoutes()}
          </Switch>
        </App>
      </ConnectedRouter>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    user:state.user
  }
}

export default connect(mapStateToProps)(Router);
