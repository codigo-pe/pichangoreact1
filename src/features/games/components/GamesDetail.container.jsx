import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

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
      <div>
        <Jumbotron>
          <h1>{juego.cancha.nombre}</h1>
          <p>
            <span>
              ¿Cuándo? {juego.fecha} | {juego.hora}
            </span>
          </p>
          <p>
            <span>
              ¿Dónde? {juego.cancha.direccion} | {juego.cancha.distrito}
            </span>
          </p>
          <p>{juego.descripcion}</p>
          <p>
            <Button variant="primary">Inscribirse</Button>
          </p>
          <p>Pichanguer@s inscritos:</p>
          <table className="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">Pichanguer@</th>
                <th scope="col">Distrito</th>
                <th scope="col">Posición</th>
                <th scope="col">Descripción</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </Jumbotron>
      </div>
    );
  }
}

export { GamesDetail };
