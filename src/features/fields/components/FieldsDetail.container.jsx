import React from "react";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import "./fieldsdetail.scss";

import cancha from "../../../assets/images/cancha01.jpg";
import mapa from "../../../assets/images/cancha01mapa.jpg"

/*import './Fieldsdetail.scss';*/

//import jsonCanchas from "./jobs_cancha.json"

class FieldDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       detail: []
     }
  }

  componentDidMount() {
    // peticion a servidor para traer la data de la cancha
    fetch("http://127.0.0.1:8000/canchaslist/")
    .then(response => response.json())
    .then(json => this.setState({ detail: json.find((cancha) => {
      return cancha.id == this.props.match.params.id
    })
   }));
  
  }
    render() {
    console.log("prueba de estado",this.state)
    return (
      <React.Fragment>
        <div className="container">
            <h1>{this.state.detail.nombre}</h1>  
            <div>    
            </div>
            <div>
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
              <Tab eventKey="home" title="Información" >
                <p>Dirección: {this.state.detail.direccion} - {this.state.detail.distrito}</p>
                <p>Teléfono: {this.state.detail.teléfono}</p>
                <p>Costo por hora: {this.state.detail.costo_por_hora}</p>
                <p>Jugadores por equipo: {this.state.detail.jugadores_por_equipo}</p>
                <img className="center" src={cancha} alt=""/>
              </Tab>
              <Tab eventKey="profile" title="Mapa">
              <img src={mapa} alt="" style = {{margin : '20px'}}/>
              </Tab>
              <Tab eventKey="contact"  title="Juegos activos">
              <h1>bye</h1>
              </Tab>
            </Tabs>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export {
  FieldDetail,
} 