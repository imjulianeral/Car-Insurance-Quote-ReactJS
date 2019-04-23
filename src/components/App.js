import React, { Component } from 'react';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helpers';
import Header from './Header';
import Form from './Form';
import Summary from './Summary';

class App extends Component {
  
  state = {
    result: '',
    data: {}
  }
  

  quoteSafe = (data) => {
    const { brand, year, plan } = data;

    // add a base of 2000
    let result = 2000;

    // get the years diference.
    const diference = obtenerDiferenciaAnio(year);

    // for each year subtract 3% to the value
    result -= ((diference * .03) * result);

    // American 15%, Asian 5%, European 30% of increment at the actual value
    result *= calcularMarca(brand);

    // basic plan increment the value 20% more, and the complete plan increment the value 50% more
    let incrementPlan = obtenerPlan(plan);
    result *= parseFloat(incrementPlan).toFixed(2);

    const dataCar = {
      brand,
      year,
      plan
    }

    this.setState({
      result: parseFloat(result).toFixed(2),
      data: dataCar
    });
  }

  render() {
    return (
      <div className="contenedor">
        <Header
          title="Cotizador de seguro de auto"
        />
        <div className="contenedor-formulario">
          <Form
            quoteSafe={ this.quoteSafe }
          />
          <Summary
            data={ this.state.data }
            result={ this.state.result }
          />
        </div>
      </div>
    );
  }
}

export default App;
