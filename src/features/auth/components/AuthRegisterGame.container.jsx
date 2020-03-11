import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./AuthRegisterGame.container.scss"

// class AuthRegisterGame extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fields: []
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) { }

//   componentDidMount() {
//     // fetch("http://127.0.0.1:8000/formjuegos/")
//     //   .then(response => response.json())
//     //   .then(json => this.setState({ fields: json }));
//   }

//   render() {
//     let options = this.state.fields.map(field => (
//       <option>{field.nombre}</option>
//     ));
//     return (
//       // <form onSubmit={this.handleSubmit}>
//       // <h1>Register Game</h1>
//       //   <input type="text" placeholder="Usuario" />
//       //   <input type="password" placeholder="Password" />
//       //   <button>Enviar</button>
//       // </form>
//       <div className="registro-juego">
//         <h3>Arma tu propia pichanga</h3>
//         <Form onSubmit={this.handleSubmit}>
//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridDate">
//               <Form.Label>Fecha</Form.Label>
//               <Form.Control type="date" placeholder="Fecha" />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridTime">
//               <Form.Label>Hora</Form.Label>
//               <Form.Control type="time" placeholder="Hora" />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridState">
//               <Form.Label>Cancha</Form.Label>
//               <Form.Control as="select">{options}</Form.Control>
//             </Form.Group>
//           </Form.Row>

//           <Form.Group controlId="formTextarea">
//             <Form.Label>Descripción del juego</Form.Label>
//             <Form.Control as="textarea" rows="3" />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Registrar
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }


function AuthRegisterGame(props) {
  const [initValues, setInitValues] = useState({
    fields: [
      {
        id: 1,
        name: "los olivos",
        value: 1
      },
      {
        id: 2,
        name: "los portales",
        value: 2
      }
    ],
  });

  const [game, setGame] = useState({
    date: '',
    time: '',
    description: '',
    fieldSelected: ''
  });

  const fields = []
  useEffect(() => {
    // Actualiza el t?tulo del documento usando la API del navegador
    console.log("hola", game)
  }, []);

  useEffect(() => {

  }, [game])

  function handlerSubmit(e) {
    e.preventDefault();
    console.log("game", game)
  }

  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setGame({ ...game, [name]: value })
    // console.log("e", e.target.value)
  }


  function handleSelect(e) {
    const target = e.target;
    const value = target.value;
    setGame({ ...game, fieldSelected: value })
  }

  return (
    <div className="registro-juego">
      <h3>Arma tu propia pichanga</h3>
      <Form onSubmit={handlerSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Fecha</Form.Label>
            <Form.Control name="date" onChange={handleChange} value={game.date} type="date" placeholder="Fecha" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTime">
            <Form.Label>Hora</Form.Label>
            <Form.Control name="time" onChange={handleChange} value={game.time} type="time" placeholder="Hora" />
          </Form.Group>

          <Form.Group name="fieldSelected" onChange={handleSelect} as={Col} controlId="formGridState">
            <Form.Label>Cancha</Form.Label>
            <Form.Control as="select" >
              {
                initValues.fields.map((field) => <option value={field.id} key={field.id}>{field.name}</option>)
              }
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formTextarea">
          <Form.Label>Descripción del juego</Form.Label>
          <Form.Control name="description" onChange={handleChange} value={game.description} rows="3" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrar
          </Button>
      </Form>
      <br/>
    </div>
  )
}

export { AuthRegisterGame };
