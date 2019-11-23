import React, { Component } from 'react';

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
    // TODO: getPoint with Mock data
    this.setState(() => {
      const point = {};
      return { currentPoint: pointId, point };
    });
  }

  render() {
    const { pagina } = this.state;
    return <div>{`Hola Mundo! estas en: ${pagina}`}</div>;
  }
}

export default Point;
