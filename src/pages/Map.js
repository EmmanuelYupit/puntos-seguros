import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegisterPointModal: false,
      pagina: 'Map',
      points: [],
    };

    this.showRegisterPointModal = this.showRegisterPointModal.bind(this);
    this.hideRegisterPointModal = this.hideRegisterPointModal.bind(this);
    this.handleRegisterPoint = this.handleRegisterPoint.bind(this);
  }

  showRegisterPointModal() {
    this.setState({ showRegisterPointModal: true });
  }

  hideRegisterPointModal() {
    this.setState({ showRegisterPointModal: false });
  }

  handleRegisterPoint(pointInfo) {
    this.setState((state) => {
      const { points: oldPoints } = state;
      return { points: [...oldPoints, pointInfo] };
    }, this.hideRegisterPointModal);
  }

  render() {
    const { pagina } = this.state;
    return <div>{`Hola Mundo! estas en: ${pagina}`}</div>;
  }
}

export default Map;
