import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


class AuthRegisterGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {}

  componentDidMount() {
    fetch("http://127.0.0.1:8000/canchaslist/")
      .then(response => response.json())
      .then(json => this.setState({ fields: json }));
  }

  render() {
    let options = this.state.fields.map(field => (
      <option>{field.nombre}</option>
    ));
    return (
      // <form onSubmit={this.handleSubmit}>
      // <h1>Register Game</h1>
      //   <input type="text" placeholder="Usuario" />
      //   <input type="password" placeholder="Password" />
      //   <button>Enviar</button>
      // </form>
      <Form >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label style={Style}>Fecha</Form.Label>
            <Form.Control style={Style} type="date" placeholder="Fecha" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTime">
            <Form.Label style={Style}>Hora</Form.Label>
            <Form.Control style={Style} type="time" placeholder="Hora" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label style={Style} >Cancha</Form.Label>
            <Form.Control as="select" style={Style}>{options}</Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formTextarea">
          <Form.Label style={Style} >Descripción del juego</Form.Label>
          <Form.Control style={Style} as="textarea" rows="3" />
        </Form.Group>

        <Button style={Style} variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    );
  }

}

const Style = {
  fontFamily:'Helvetica',
  fontSize: '24px',
}

export { AuthRegisterGame };
