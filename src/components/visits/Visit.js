import React from 'react';
import {
  Card,
  CardHeader,
  Avatar
} from '@material-ui/core';

import FadeAndScale from '../animations/FadeAndScale';
import Emoji from './emoji_picker/Emoji';
import {relationInverse} from './emoji_picker/emojis';

export default class Visit extends React.Component{
  getShortCode(){
    if (!this.props.visit.reaction) return relationInverse["love"]
    return relationInverse[this.props.visit.reaction];
  }
  render(){
    return (
      <FadeAndScale in={this.props.in}>
        <div>
          <Card style={{'textAlign':'left','marginTop':'1em','overflow': 'visible'}}>
            <div className="row middle-xs">
              <div className="col-xs">
                <CardHeader
                  title="Usuario"
                  subheader={this.props.visit.observation}
                  avatar = {<Avatar src='https://cdn2.iconfinder.com/data/icons/super-hero/154/batman-comics-hero-avatar-head-mask-512.png'/>}

                  />
              </div>
              <div className="col-xs-2 col-sm-1">
                <Emoji shortcode={this.getShortCode()}/>
              </div>
            </div>
          </Card>
        </div>
      </FadeAndScale>
    );
  }
}
