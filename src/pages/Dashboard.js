import React from 'react';
import {Button,Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Container from '../components/Container';
import PlaceHorizontal from '../components/places/PlaceHorizontal';
//import {getPlaces} from '../requests/places';
import * as actions from '../actions/placesActions';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.loadPlaces();
  }

  loadPlaces(){
    this.props.dispatch(actions.loadAll())
  }
  places(){
    return this.props.places.map((place,index)=>{
      return <PlaceHorizontal place={place} key={index}/>
    })
  }
  render(){
    return(
      <div>
        <Link to="/new">
          <Fab color="secondary" aria-label="add" className="FAB">
            <AddIcon/>
          </Fab>
        </Link>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-2" style={{'textAlign':'left'}}>
              <Button>Explorar</Button>
              <Button>Favoritos</Button>
              <Button>Vistas Previas</Button>
            </div>
            <div className="col-xs-12 col-md-10">
              {this.places()}
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
function mapStateToProps(state,ownProps) {
  return {
    places:state.places
  };
}
export default connect(mapStateToProps)(Dashboard)
