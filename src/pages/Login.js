import React from 'react';
import {Link,Route} from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import Title from '../components/Title';
import Container from '../components/Container';
import {login,signUp} from '../requests/auth';
import * as actions from '../actions/userActions'

const LoginActions = (props) => (
  <div>
    <Link to="/signup" style={{'marginRight':'1em'}}>Crear Nueva Cuenta</Link>
    <Button variant="contained" color="secondary" onClick={props.requestAuth}>Ingresar</Button>
  </div>
);

const SignUpActions = (props)=>(
    <div>
      <Link to="/login" style={{'marginRight':'1em'}}>Ya Tengo Cuenta</Link>
      <Button variant="contained" color="secondary" onClick={props.createAccount}>Crear Cuenta</Button>
    </div>
)
class Login extends React.Component {
  constructor(props){
    super(props);
    this.requestAuth = this.requestAuth.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.auth = this.auth.bind(this);
  }

  requestAuth(){
    const credentials={
      email:this.emailField.value,
      password:this.passwordField.value
    }
    login(credentials).then(this.auth).catch(console.log)
  }
  auth(data){
    this.props.dispatch(actions.login(data.jwt));
    this.props.dispatch(actions.loadUser(data.user));
    this.props.dispatch(push('/'));
  }
  createAccount(){
    const credentials={
      email:this.emailField.value,
      password:this.passwordField.value,
      name: this.nameField.value
    }
    signUp(credentials).then(this.auth).catch(console.log)
  }

  render() {
    return(
      <div className="row middle-xs">
        <div className="col-xs-12 col-sm-6">
          <Container>
            <div style={{'textAlign':'left'}}>
              <Title/>
              <TextField label="Correo Electrónico" type="email" name="email"className="text-field" fullWidth inputRef={(emailField) => { this.emailField = emailField }}/>
              <TextField label="Contraseña" type="password" name="password" className="text-field" fullWidth inputRef={(passwordField) => { this.passwordField = passwordField }}/>
              <Route path="/signup" exact render={()=>{
                  return(
                    <TextField label="Nombre Completo" type="text" name="name" className="text-field" fullWidth inputRef={(nameField) => { this.nameField = nameField }}/>
                  )
                }}>
              </Route>
              <div className="Login-actions">
                <Route path="/login" exact render={()=>(<LoginActions requestAuth={this.requestAuth} /> ) }>
                </Route>
                <Route path="/signup" exact render={()=>(<SignUpActions createAccount={this.createAccount} /> ) }>
                </Route>
              </div>
            </div>
          </Container>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div >
            <Route path="/login" exact render={()=>
              <div className="Login-background" style={{'backgroundImage':"url("+process.env.PUBLIC_URL+'/images/login-background.jpg)'}}></div>
              }>
            </Route>
            <Route path="/signup" exact render={()=>
              <div className="Login-background" style={{'backgroundImage':"url("+process.env.PUBLIC_URL+'/images/friends.jpg)'}}></div>
            }>
            </Route>

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps) {
  return {
    user:state.user
  };
}
export default connect(mapStateToProps)(Login);
