import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';

class App extends Component {

  quoteSafe = (data) => {
    const { brand, year, plan } = data;

    // add a base of 2000
    let result = 2000;

    // get the years diference.

    // for each year subtract 3% to the value

    // American 15%, Asian 5%, European 30% of increment at the actual value
     
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
        </div>
      </div>
    );
  }
}

export default App;
