import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: 'Register',
    };
    this.handleUserRegister = this.handleUserRegister.bind(this);
  }

  handleUserRegister() {
    const { history } = this.props;
    history.push('/login');
  }

  render() {
    const { pagina } = this.state;
    return <div>{`Hola Mundo! estas en: ${pagina}`}</div>;
  }
}

export default Register;
