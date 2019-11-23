import React, { Component } from 'react';

class RegisterPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: 'RegisterPoint',
    };
  }

  render() {
    const { pagina } = this.state;
    return <div>{`Hola Mundo! estas en: ${pagina}`}</div>;
  }
}

export default RegisterPoint;
