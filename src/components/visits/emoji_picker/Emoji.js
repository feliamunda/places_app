import React from 'react';
import emojione from 'emojione'

function getEmojiHTML(code) {
  return {
    __html: emojione.shortnameToImage(code)
  }
}
const Emoji=(props) => {
  return (
    <div
      className="Emoji"
      onClick={()=>props.onClick(props.shortcode)}
      dangerouslySetInnerHTML={getEmojiHTML(props.shortcode)}
    />
  )
}

export default Emoji;
