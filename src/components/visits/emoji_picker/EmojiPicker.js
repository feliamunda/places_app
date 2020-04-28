import React from 'react';

import Emoji from './Emoji';
import {emojis,relation} from './emojis';

export default class EmojiPicker extends React.Component{
  constructor(props){
    super(props);
    this.state={
      emojis
    }
    this.emojiSelected = this.emojiSelected.bind(this);
  }
  emojiSelected(code){
    const reaction = relation[code];
    this.props.onSelect(reaction);
    const emojisReordered= [code].concat(emojis.filter(el=>el !==code));
    this.setState({
      emojis:emojisReordered
    })
  }
  buildEmojis(){
    return this.state.emojis.map((shortcode,index)=> <Emoji onClick={this.emojiSelected} shortcode={shortcode} key={index} />)
  }

  render(){
    return(
      <div>
        <ul className="Emoji-picker">
          {this.buildEmojis()}
        </ul>
      </div>
    )
  }
}
