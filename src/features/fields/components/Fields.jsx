import React from "react";
import jsonCanchas from "./jobs_cancha.json"
import Table from 'react-bootstrap/Table'

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: []
    }

    console.log("jsonCanchas", this.state.fields)
  }

  componentDidMount() {
    // peticion a servidor para traer todas las canchas
    //this.setState({
    //  fields: jsonCanchas    
    //})
    // fetch("http://127.0.0.1:8000/canchaslist/")
    //   .then((response) => response.json())
    //   .then ((value) => {
    //     let {results: fields} = value;
    //     this.setState((state,props) => ({
    //       fields
    //     }));
    //   })
    fetch("http://127.0.0.1:8000/canchaslist/")
      .then(response => response.json())
      .then(json => this.setState({ fields: json }));
  }

  handleRedirect(field) {
    this.props.history.push(`fields/${field.id}`)
  }

  render() {
    // let fields = this.state.fields.map((field) => <h1 onClick={() => this.handleRedirect(field)} key={field.id}>{field.nombre}</h1>)

    // console.log("fields", fields)
    // return (
    //   <div>
    //     {fields}
    //   </div>
    // )
    let rows = this.state.fields.map((field) => <tr onClick={() => this.handleRedirect(field)} key={field.id}>
      <td>{field.nombre}</td><td>{field.distrito}</td><td>{field.teléfono}</td><td>{field.costo_por_hora}</td><td>{field.jugadores_por_equipo}</td>
    </tr>)
    console.log('prueba de estado',this.state)
    return (
      <div>
        {/* <Field /> */}
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Distrito</th>
              <th>Teléfono</th>
              <th>Costo por hora</th>
              <th>Jugadores por equipo</th>
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
  Field
}