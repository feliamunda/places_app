import React from 'react';

import { CSSTransition } from 'react-transition-group';

import {Card,CardContent,CardMedia,CardHeader,CardActions} from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class PlaceCard extends React.Component{
  render(){
    return(
      <CSSTransition
        classNames='fade-scale'
        in={this.props.in}
        timeout={3000}
        unmountOnExit
      >
        <div className="col-xs-12 col-sm-4" key={this.props.index}>
          <Card>
            <CardMedia>
              <img alt={this.props.place.title} src={process.env.PUBLIC_URL + this.props.place.imageUrl}/>
            </CardMedia>
            <CardHeader title={this.props.place.title}/>
            <CardContent>{this.props.place.description}</CardContent>
            <CardActions style={{'justifyContent':'end'}}>
              <Button color="secondary">Ver más</Button>
              <Button color="secondary" onClick={()=> this.props.onRemove(this.props.place)}>Ocultar</Button>
            </CardActions>
          </Card>
        </div>
      </CSSTransition>
    )
  }
}
