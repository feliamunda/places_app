import React from 'react';
import {Button} from '@material-ui/core';
import {indigo} from '@material-ui/core/colors';
import { TransitionGroup } from 'react-transition-group';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Container from '../components/Container';
import Title from '../components/Title';
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';
import data from '../requests/places';
import {getPlaces} from '../requests/places';


class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      places : data.places
    }
    this.hidePlace = this.hidePlace.bind(this);
  }

  loadPlaces(){
    getPlaces().then(jsonR=>{
      //const places = jsonR.docs;
    });
  }

  places(){
    return this.state.places.map((place,index)=>{
      return(
        <PlaceCard onRemove={this.hidePlace} place={place} key={index}/>
      )
    })
  }

  hidePlace(place){
    this.setState({
      places: this.state.places.filter(el => el!== place)
    })
  }

  render(){
    return(
      <section>
        <div className="Header-background">
          <Container>
            <div className="Header-main">
              <Title/>
              <Link to="/signup">
                <Button color='secondary' variant="contained">Crear cuenta gratuita</Button>
              </Link>
              <img alt="Top-Background" src={process.env.PUBLIC_URL + '/images/top-background.png'} className="Header-illustration"/>
            </div>
            <div>
              <Benefits/>
            </div>
          </Container>
        </div>
        <div style={{'backgroundColor':indigo[400],'padding':'50px','color':'white'}}>
          <h3 style={{'fontSize':'24px'}}>Sitios Populares</h3>
          <TransitionGroup className="row">
            {this.places()}
          </TransitionGroup>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state,ownProps) {
  return {
    places:state.places
  };
}

export default connect(mapStateToProps)(Home);
