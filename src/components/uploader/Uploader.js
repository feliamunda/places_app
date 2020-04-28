import React from 'react';
import {Button} from '@material-ui/core';

export default class Uploader extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      file:{name:''}
    }
    this.openInput=this.openInput.bind(this);
    this.handleFile=this.handleFile.bind(this);
  }
  handleFile(ev){
    let file = ev.target.files[0];
    if(!file) return;
    this.setState({
      file
    });
    this.props.getFile(this.props.type,file);
  }
  openInput(){
    this.refs.file.click();
  }
  render(){
    return(
      <div>
        <input type='file' style={{'display':'none'}} ref='file'onChange={this.handleFile}/>
        <span style={{'marginRight':'0.5em'}}>{this.state.file.name}</span>
        <Button color='primary' variant='contained' onClick={this.openInput} style={{'marginTop':'1em'}}>{this.props.label}</Button>
      </div>
    )
  }
}
