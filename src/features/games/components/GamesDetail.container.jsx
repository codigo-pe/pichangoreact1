import React from "react";

class GamesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: []
    }
  }

  componentDidMount() {
    // peticion a servidor para traer la data del juego
  //   fetch("http://127.0.0.1:8000/juegoslist/")
  //   .then(response => response.json())
  //   .then(json => this.setState({ detail: json.find((juego) => {
  //     return juego.id == this.props.match.params.id
  //   })
  //  }));
        fetch("http://127.0.0.1:8000/canchaslist/")
       .then((response) => response.json())
       .then ((value) => {
         let {results: detail} = value;
         this.setState((state,props) => ({
           detail
         }));
       })
  }
    render() {
    console.log("prueba",this.state)
    console.log("prueba id",this.props.match.params.id)
    return (
      <div>
        <h1>{this.state.detail.fecha} | {this.state.detail.hora}</h1>
        <p>{this.state.detail.descripcion}</p>
      </div>
    )
  }
}

export {
  GamesDetail
}