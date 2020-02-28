import React from "react";
import jsonCanchas from "./jobs_cancha.json"

class FieldDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: ""
    }
  }

  componentDidMount() {
    // peticion a servidor para traer la data de la cancha
    const field = jsonCanchas.filter((cancha) => {
      return cancha.id == this.props.match.params.id
    })  

    this.setState({
      field: field    
    })
  }

  render() {
    console.log("props", this.state)
    
    
    return (
      <div>
        <h1>{this.state.field.nombre}</h1>       

      </div>
    )
  }
}

export {
  FieldDetail
}