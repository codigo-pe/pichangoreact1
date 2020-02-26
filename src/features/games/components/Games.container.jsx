import React from "react";
import Table from 'react-bootstrap/Table'
import { Field } from "../..";
class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    // peticion a servidor para traer todos los juegos
    this.setState({
      games: [
        {
          id: 1,
          nombre: "juego 1"
        },
        {
          id: 2,
          nombre: "juego 2"
        },
        {
          id: 3,
          nombre: "juego 3"
        }
      ]
    })
  }

  handleRedirect(game) {
    this.props.history.push(`games/${game.id}`)
  }

  render() {
    // let games = this.state.games.map((game) => <h1 onClick={() => this.handleRedirect(game)} key={game.id}>{game.nombre}</h1>)
    return (
      <div>
        {/* <Field /> */}
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
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