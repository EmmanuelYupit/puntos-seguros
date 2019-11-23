import React, { Component } from 'react';
import MapComponent from '../components/map';
import QuikNavComponent from '../components/quiknav';
import HeaderComponent from '../components/header';

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
        <HeaderComponent title={pagina} />
        <MapComponent />
        <QuikNavComponent />
      </>
    );
  }
}

export default Map;
