import data from "./data";
import React, { Component } from "react";
import BotonesClass from "./components/BotonesClass"
import Recordatorio from "./components/Recordatorio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      seleccionAnterior: "",
    };
    this.historial = []
  }

  componentDidUpdate() {
      this.historial.push(this.state.seleccionAnterior);   
  }

  handleClick = (element) => {
    const id = element.target.id;
    if (this.state.contador >= 7) {
      alert("Fin.");
    } else if (id === "A") {
      if (this.state.opcion !== "A") {
        this.setState({
          contador: this.state.contador + 1,
          seleccionAnterior: "A"
        });
      } else {
        this.setState({
          contador: this.state.contador + 2
        })
      }
    } else {
      if (this.state.opcion === "A") {
        this.setState({
          contador: this.state.contador + 3,
          seleccionAnterior: "B"
        })
      } else {
        this.setState({
          contador: this.state.contador + 2,
          seleccionAnterior: "B"
        })
      }
    }

    console.log(this.historial);
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <BotonesClass
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Recordatorio
          seleccionPrevia={this.state.seleccionAnterior}
          historial={this.historial.map((element, index) => (<li key={index}>{element}</li>
            ),
            data[this.state.contador].id
          )}
        />
      </div>
    );
  }
}

export default App;