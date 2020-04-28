import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

export default class FadeAndScale extends React.Component {
  render() {
    return(
      <div className={this.props.className}>
        <CSSTransition
          classNames='fade-scale'
          in={this.props.in}
          timeout={1000}
          unmountOnExit
        >
        {this.props.children}
      </CSSTransition>
      </div>
    )
  }
}
