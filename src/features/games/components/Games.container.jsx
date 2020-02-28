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
          firstname: "juego 1",
          lastname: "yabiku",
          username: "syabiku"
        },
        {
          id: 2,
          firstname: "juego 2",
          lastname: "yabiku",
          username: "syabiku"
        },
        {
          id: 3,
          firstname: "juego 3",
          lastname: "yabiku",
          username: "syabiku"
        },
      ]
    })
  }

  handleRedirect(game) {
    this.props.history.push(`games/${game.id}`)
  }

  render() {
    let rows = this.state.games.map((game) => <tr onClick={() => this.handleRedirect(game)} key={game.id}>
      <td>{game.id}</td><td>{game.frstname}</td><td>{game.lastname}</td><td>{game.username}</td>
    </tr>)
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