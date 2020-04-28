import React from 'react';
import {connect} from 'react-redux';
import {TextField,Button,Card,CardContent,CardActions} from '@material-ui/core';
import {push} from 'connected-react-router';

import Title from '../../components/Title';
import Container from '../../components/Container';
import Uploader from '../../components/uploader/Uploader';
import * as requests from '../../requests/places'

class NewPlace extends React.Component{
  constructor(props){
    super(props);
    this.state={uploading:false};
    this.createPlace = this.createPlace.bind(this);
    this.getFile = this.getFile.bind(this);
  }
  createPlace(){
    const data={
      title:this.titleField.value,
      address:this.addressField.value,
      description: this.descriptionField.value
    }
    if (data["title"] === "" || data["address"] === "" || data["description"] === ""){
      alert('Llena todo'); //Handle Error
      return "";
    }

    if(this.state.avatar) data.avatar= this.state.avatar;
    if(this.state.cover) data.cover= this.state.cover;

    this.setState({uploading:true})
    requests.createPlace(data,this.props.user.jwt).then(data=>{
      console.log(data);
      this.setState({uploading:false})
      this.props.dispatch(push("/"));
    }).catch(console.log)
  }
  getFile(type,file){
    const state={};
    state[type]=file;
    this.setState(state);
  }

  render(){
    return(
      <div>
        <Container>
          <Card>
            <CardContent style={{'textAlign':'left', 'padding':'20px'}}>
              <header style={{'borderBottom':'solid 2px #eee'}}><Title/></header>
              <div>
                <TextField
                  label='Nombre del Negocio'
                  inputRef={(titleField)=>{this.titleField=titleField}}
                  fullWidth ={true}
                  />
                <TextField
                  label='Dirección del Negocio'
                  inputRef={(addressField)=>{this.addressField=addressField}}
                  fullWidth ={true}
                  />
                <div style={{'marginTop':'1em'}}>
                  <Uploader label='Subir Avatar' type='avatar' getFile={this.getFile}/>
                </div>
                <div style={{'marginTop':'1em'}}>
                  <Uploader label='Subir Cover' type='cover' getFile={this.getFile}/>
                </div>
                <TextField
                  label='Descripción del Negocio'
                  inputRef={(descriptionField)=>{this.descriptionField=descriptionField}}
                  fullWidth
                  multiline
                  rows="4"
                  />
                <CardActions style={{'justifyContent':'end','marginTop':'1em'}}>
                  <Button disabled = {this.state.uploading}variant="contained" color="secondary" onClick={this.createPlace}>Guardar</Button>
                </CardActions>
              </div>
          </CardContent>
          </Card>
        </Container>
      </div>
    )
  }
}

export default connect(function (state,OwnProps) {
  return{
    user:state.user
  }})(NewPlace)
