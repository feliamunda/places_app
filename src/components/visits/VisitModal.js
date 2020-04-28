import React from 'react';
import Modal from 'react-modal';
import {TextField,Button} from '@material-ui/core';
import {yellow} from '@material-ui/core/colors';

import Container from '../Container';
import Title from '../Title';
import EmojiPicker from './emoji_picker/EmojiPicker';

Modal.setAppElement('#root')

export default class VisitModal extends React.Component{
    constructor(props){
      super(props);
      this.state={
        isOpenModal:false
      }
      this.closeModal = this.closeModal.bind(this);
      this.emojiSelected = this.emojiSelected.bind(this);
      this.submit = this.submit.bind(this);
    }
    openModal(){
      this.setState({isOpenModal:true})
    }
    closeModal(){
      this.setState({isOpenModal:false});
    }
    submit(){
      const observation = this.comentary.value;
      if (observation === "") return;
      this.props.onSubmit(observation,this.state.reaction);
      this.comentary.value="";
      this.closeModal();
    }
    emojiSelected(reaction){
      this.setState({
        reaction
      })
    }
    render(){
      return(
        <div>
          <Modal isOpen={this.state.isOpenModal}>
            <Container>
              <div style={{'textAlign': 'left','marginTop':'2em'}}>
                <header>
                  <Title/>
                  <h2>Cuentanos de tu Experiencia en &nbsp;
                    <span style={{'backgroundColor': yellow[700]}}>{this.props.place.title}</span>
                  </h2>
                </header>
                <div className="row">
                  <div className="col-xs-4 col-sm-2 col-lg-1">
                    <EmojiPicker onSelect={this.emojiSelected} />
                  </div>
                  <div className="col-xs">
                  <TextField
                    label="Cuentanos de este lugar"
                    multiline={true}
                    inputRef={(comentary)=>{this.comentary=comentary}}
                    fullWidth={true}
                  />
                  <div style={{'marginTop':'1em'}}>
                    <Button variant="outlined" color="secondary" onClick={this.submit}>Guardar</Button>
                    <Button variant="contained" color="secondary" style={{'marginLeft': '2em'}} onClick={this.closeModal}>Cancelar</Button>
                  </div>
                </div>
                </div>
              </div>
            </Container>
          </Modal>
        </div>
      )
    }
}
