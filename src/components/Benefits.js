import React from 'react';

import {Card,CardContent} from '@material-ui/core';
import {red,amber} from '@material-ui/core/colors';

export default class Benefits extends React.Component{
  render(){
    return(
      <ul>
        <Card className="Header-Benefit">
          <CardContent>
            <div className="row">
              <div className="Header-Benefit-image" style={{'backgroundColor':amber['A400']}}>
                <img src={process.env.PUBLIC_URL + '/images/heart.png'} alt="Heart"/>
              </div>
              <div className="Header-Benefit-content">
                <h3>Calificaciones con emociones</h3>
                <p>Califica tus lugares con experiencias, no con números</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="Header-Benefit">
          <CardContent>
            <div className="row">
              <div className="Header-Benefit-image" style={{'backgroundColor':red['A400']}}>
                <img src={process.env.PUBLIC_URL + '/images/no-internet.png'} alt="No Internet"/>
              </div>
              <div className="Header-Benefit-content">
              <h3>¿Sin Internet? Sin Problemas</h3>
              <p>Places funciona sin internet o en conexiones lentas</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="Header-Benefit">
          <CardContent>
            <div className="row">
              <div className="Header-Benefit-image" >
                <img src={process.env.PUBLIC_URL + '/images/star.png'} alt="Star" />
              </div>
              <div className="Header-Benefit-content">
              <h3>Tus lugares favoritos</h3>
              <p>Define tu lista de sitios favoritos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </ul>
    )
  }
}
