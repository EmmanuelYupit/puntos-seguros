import React, { Component } from 'react';

const pointMockData = {
  latitud: 21.1660439,
  longitud: -86.8204977,
  imagen: '',
  nombre: 'Foo Point',
  description: 'Bar point description',
  radio: 5,
  motivos: ['bien ioluminado', 'pasa mucho transporte publico', 'hay policias cerca'],
};

class Point extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: 'Point',
      point: {},
      currentPoint: 0,
    };
  }

  componentDidMount() {
    const { match: { params: { id: pointId } } } = this.props;
    this.setState({ currentPoint: pointId, point: { ...pointMockData } });
  }

  render() {
    const { pagina } = this.state;
    return <div>{`Hola Mundo! estas en: ${pagina}`}</div>;
  }
}

export default Point;
