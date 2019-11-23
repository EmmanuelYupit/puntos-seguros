import React, { Component } from 'react';

class Point extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: 'Point',
    };
  }

  render() {
    const { pagina } = this.state;
    return <div>{`Hola Mundo! estas en: ${pagina}`}</div>;
  }
}

export default Point;
