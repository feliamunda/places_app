import  React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default class LoginButton extends React.Component{
  render(){
    return(
      <Link to="/login">
        <Button style={{'color':'white'}}>Iniciar Sesión</Button>
      </Link>
    )
  }
}
