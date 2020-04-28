import React from 'react';
import {Card} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Fab} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import {yellow} from '@material-ui/core/colors';

import {getPlace} from '../requests/places';
import Container from '../components/Container';
import VisitForm from '../components/visits/VisitForm';
import VisitsCollection from '../components/visits/VisitsCollection';
import * as visitsActions from '../actions/visitsActions';
import * as favoritesActions from '../actions/favoritesActions';

class Place extends React.Component{
  constructor(props){
    super(props);
    const slug = props.match.params.slug;
    this.loadPlace(slug);
    this.state={
      place: {}
    }
    this.favs = this.favs.bind(this);
  }
  favBtn(){
    return (
      <Fab style={{'backgroundColor':yellow[700]}} className="Fav-btn" onClick={this.favs()}>
        <StarIcon/>
      </Fab>
    )
  }
  favs(){
    this.props.dispatch(favoritesActions.add(this.state.place._id));
  }
  loadPlace(slug){
    this.props.dispatch(visitsActions.loadAllForPlace(slug));
    getPlace(slug).then(json=>{
      this.setState({
        place: json
      })
    })
  }

  render(){
    const {place}= this.state;
    return(
      <div className="Place-container">
        <header className="Place-cover" style={{'backgroundImage':'url('+place.coverImage+')'}}>
        </header>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <Card className="Place-card">
                {this.favBtn()}
                <div className="col-xs-12 col-md-8 col-lg-2">
                  <img src={place.avatarImage} alt={place.title} style={{'maxWidth':'100%'}}/>
                </div>
                <div className="col-xs">
                  <h1>{place.title}</h1>
                  <address>{place.address}</address>
                  <p>{place.description}</p>
                </div>
                <div style={{'marginTop':'1em'}}>
                  <VisitForm place={place}/>
                </div>
              </Card>
            </div>
            <div className="col-xs">
              <VisitsCollection visits={this.props.visits}/>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
function mapStateToProps(state,ownProps) {
  return {visits:state.visits};
}
export default connect(mapStateToProps)(withRouter(Place));
