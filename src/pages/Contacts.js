import React, { Component } from "react";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: "Contacts"
    };
  }

  render() {
    const { pagina } = this.state;
    return <div>{`Hola Mundo! estas en: ${pagina}`}</div>;
  }
}

export default Contacts;
