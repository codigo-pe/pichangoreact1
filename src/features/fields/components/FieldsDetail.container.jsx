import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import "./fieldsdetail.scss";

import cancha from "../../../assets/images/cancha01.jpg";
import mapa from "../../../assets/images/cancha01mapa.jpg";

//import jsonCanchas from "./jobs_cancha.json"

class FieldDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
        juegos: [
          {
            jugadores: [
              {
                usuario: {}
              }
            ]
          }
        ]
      }
    };
  }

  componentDidMount() {
    // peticion a servidor para traer la data de la cancha
    fetch("http://127.0.0.1:8000/canchaslist/")
      .then(response => response.json())
      .then(json =>
        this.setState({
          detail: json.find(cancha => {
            return cancha.id == this.props.match.params.id;
          })
        })
      );
  }

  handleRedirect(game) {
    //preguntar a Sebas si hay otra forma de implementar esto
    this.props.history.push(`../games/${game.id}`);
  }

  render() {
    let cancha = this.state.detail;
    let rows = cancha.juegos.map(juego => (
      <tr onClick={() => this.handleRedirect(juego)} key={juego.id}>
        <td>{juego.fecha}</td>
        <td>{juego.hora}</td>
        <td>{juego.jugadores.length}</td>
      </tr>
    ));
    return (
      <React.Fragment>
        <div className="container">
          <h1>{cancha.nombre}</h1>
          <div></div>
          <div>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="home" title="Información">
                <p>
                  Dirección: {cancha.direccion} - {cancha.distrito}
                </p>
                <p>Teléfono: {cancha.teléfono}</p>
                <p>Costo por hora: {cancha.costo_por_hora}</p>
                <p>Jugadores por equipo: {cancha.jugadores_por_equipo}</p>
                <img className="center" src={cancha} alt="" />
              </Tab>
              <Tab eventKey="profile" title="Mapa">
                <img src={mapa} alt="" style={{ margin: "20px" }} />
              </Tab>
              <Tab eventKey="contact" title="Juegos activos">
                <Table className="table table-sm table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Fechas</th>
                      <th scope="col">Hora</th>
                      <th scope="col">Inscritos</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </Table>
              </Tab>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { FieldDetail };
