import React from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';

import VisitModal from './VisitModal';
import * as actions from '../../actions/visitsActions';

class VisitForm extends React.Component{
  constructor(props){
    super(props);
    this.openVisitModal=this.openVisitModal.bind(this);
    this.add=this.add.bind(this);
  }
  openVisitModal(){
    this.refs.modalRef.openModal();
  }
  add(observation,reaction="like"){
    this.props.dispatch(actions.addVisit(this.props.place,observation,reaction))
  }
  render(){
    return(
      <div>
        <VisitModal place={this.props.place} onSubmit={this.add} ref="modalRef"/>
        <Button color="secondary" onClick={this.openVisitModal}>Valora Tu Visita</Button>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(VisitForm);
