import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import mapa from "../../../assets/images/cancha01mapa.jpg"

import "./gamesDetail.scss";

class GamesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: 
        {
          jugadores: [
            {
              usuario: {}
            }
          ],
          cancha: {}
        }
      
    };
  }

  componentDidMount() {
    // peticion a servidor para traer la data del juego
    fetch("http://127.0.0.1:8000/juegoslist/")
      .then(response => response.json())
      .then(json => {
        let detail = json.find(juego => juego.id == this.props.match.params.id);
        this.setState({
          detail
        })
       });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("state", this.state.detail)
  //   console.log("nextState",nextState)
  //   // return this.state.detail !== nextState.detail
  //   return false
  // }

  render() {
    //se define las constantes que corresponden con cada uno de los datos que se presentará en la vista
    // const juego = this.state.detail;
    // const cancha = juego.map(juegodetalle => juegodetalle.cancha.nombre);
    // const direccion = juego.map(juegodetalle => juegodetalle.cancha.direccion);
    // const distrito = juego.map(juegodetalle => juegodetalle.cancha.distrito);
    // const fecha = juego.map(juegodetalle => juegodetalle.fecha);
    // const hora = juego.map(juegodetalle => juegodetalle.hora);
    // const descripcion = juego.map(juegodetalle => juegodetalle.descripcion);
    // console.log("juego",juego)
    //se arma la tabla que presenta la lista de jugadores inscritos en el juego
    // let arreglojugadores = juego.map(juegodetalle => juegodetalle.jugadores);
    // let jugadores = arreglojugadores[0];
    // console.log("jugadores",jugadores)
    // let firstname = jugadores.map(jugador => jugador.posicion)
    // console.log("nombre",firstname)

   

    // console.log("this.state.detail", (this.state.detail[0].hasOwnProperty("canchas")) ? this.state.detail[0].canchas : '');
    // let cancha = this.state.detail[0].hasOwnProperty("cancha") ? this.state.detail[0].cancha : {};
    // let jugadores = this.state.detail[0].hasOwnProperty("jugadores") ? this.state.detail[0].jugadores : {}; 
    // console.log("cancha", cancha)
    // console.log("jugadores", jugadores)
    // console.log(this.state.detail[0].hasOwnProperty("cancha") ?this.state.detail[0].cancha : '' )
    // console.log(this.state.detail.cancha)
    // console.log(this.state.detail.jugadores)
    // let jugadores = this.state.detail[0].jugadores.map(jugador => <h2>{jugador.usuario.first_name}</h2>)
    let juego = this.state.detail
    let rows = juego.jugadores.map(jugador =>
      <tr>
        <td>{jugador.usuario.first_name} {jugador.usuario.last_name}</td>
        <td>{jugador.distrito}</td>
        <td>{jugador.posicion}</td>
        <td>{jugador.descripcion}</td>
      </tr>)
    return (
      <React.Fragment>
      <div className="container">
        <h3>Pichanga en {juego.cancha.nombre}</h3>
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
              <Tab eventKey="home" title="Jugadores Inscritos" >
              <Table responsive striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th className="blue" scope="col" >Pichanguer@</th>
                      <th className="blue" scope="col">Distrito</th>
                      <th className="blue" scope="col">Posición</th>
                      <th className="blue" scope="col">Descripción</th>
                      <th><Button variant="primary">Unirse al Juego</Button></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows}
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="profile" title="Info del Juego">
                <p style={{fontWeight:'bolder'}}>Fecha {juego.fecha} </p>
                <p style={{fontWeight:'bolder'}}>Hora: {juego.hora}</p>
                <p>Dirección: {juego.cancha.direccion} </p>
                <p> Distrito: {juego.cancha.distrito}</p>
                <p> Descripción del Juego: {juego.descripcion}</p>
                <p style={{color:'green'}}>
                  Incluye: Chalecos, Pelotas
                  Tribuna: Para 100 personas y Areas sociales.
                  <br/>
                  Estacionamiento interno: Para 100 vehículos, vigilado.
                  Servicios higiénicos: Damas y Caballeros
                  <br/>
                  Términos y condiciones:
                  Para reservar su cancha debe seleccionar el horario disponible (verde) e ingresar sus datos.
                  Para confirmar su reserva debe realizar el depósito bancario en un plazo máximo de 12 horas.
                </p>
              </Tab>
              <Tab eventKey="contact"  title="Mapa">   
                <img src={mapa} alt="" style = {{margin : '20px'}}/>
              </Tab>
        </Tabs>
      </div>
      </React.Fragment>
    );
  }
}

export { GamesDetail };
