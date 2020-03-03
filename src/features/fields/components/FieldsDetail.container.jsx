import React from "react";

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
      <div>
        <h1>{this.state.detail.nombre}</h1>       
        <p>{this.state.detail.direccion} - {this.state.detail.distrito}</p>
        <p>Teléfono: {this.state.detail.teléfono}</p>
        <p>Costo por hora: {this.state.detail.costo_por_hora}</p>
        <p>Jugadores por equipo: {this.state.detail.jugadores_por_equipo}</p>
      </div>
    )
  }
}

export {
  FieldDetail
}