import React from "react";

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: []
    }
  }

  componentDidMount() {
    // peticion a servidor para traer todos los juegos
    this.setState({
      fields: [
        {
          id: 1,
          nombre: "field 1"
        },
        {
          id: 2,
          nombre: "field 2"
        },
        {
          id: 3,
          nombre: "field 3"
        }
      ]
    })
  }

  handleRedirect(field) {
    this.props.history.push(`fields/${field.id}`)
  }

  render() {
    let fields = this.state.fields.map((field) => <h1 onClick={() => this.handleRedirect(field)} key={field.id}>{field.nombre}</h1>)

    console.log("fields", fields)
    return (
      <div>
        {fields}
      </div>
    )
  }
}

export {
  Field
}