import React, { Component } from 'react';
import MapComponent from '../components/map';
import QuikNavComponent from '../components/quiknav'

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: 'Map',
    };
  }

  render() {
    const { pagina } = this.state;
    return (
      <>
        {`Hola Mundo! estas en: ${pagina}`}
        <MapComponent />
        <QuikNavComponent />
      </>
    );
  }
}

export default Map;
