import React from "react";
import Table from 'react-bootstrap/Table'
//import { Field } from "../..";

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/juegoslist/")
      .then(response => response.json())
      .then(json => this.setState({ games: json }));
  }

  handleRedirect(game) {
    this.props.history.push(`games/${game.id}`)
  }

  render() {
    console.log("juegos prueba",this.state.games[0])
    let rows = this.state.games.map((game) => <tr onClick={() => this.handleRedirect(game)} key={game.id}>
      <td>{game.cancha.nombre}</td><td>{game.fecha}</td><td>{game.hora}</td><td>{game.cancha.distrito}</td><td>{game.cancha.costo_por_hora}</td><td>{game.jugadores.length}</td>
    </tr>)
    return (
      <div>
        <h3>Estos son los juegos creados en pichanGO</h3>
        {/* <Field /> */}
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cancha</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Distrito</th>
              <th>Costo/Hora</th>
              <th>Inscrit@s</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
        {/* {games} */}
      </div>
    )
  }
}

export {
  Games
}