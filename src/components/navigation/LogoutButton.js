import  React from 'react';
import {IconMenu, MenuItem, IconButton} from 'material-ui';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default class LogoutButton extends React.Component{
  render(){
    return(
      <IconMenu
        iconButtonElement={<IconButton iconStyle={{'fill':'white'}}><MoreVertIcon/></IconButton>}
        targetOrigin={{horizontal:'right', vertical:'top'}}
        anchorOrigin={{horizontal:'right', vertical:'top'}}
      >
        <MenuItem primaryText = "Cerrar Sesión" onClick={this.props.logout}/>
      </IconMenu>
    )
  }
}
