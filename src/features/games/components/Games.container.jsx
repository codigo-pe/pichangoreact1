import React from "react";
import {Field} from "../.."
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
    let games = this.state.games.map((game) => <h1 onClick={() => this.handleRedirect(game)} key={game.id}>{game.nombre}</h1>)
    return (
      <div>
        <Field/>
        {games}
      </div>
    )
  }
}

export {
  Games
}