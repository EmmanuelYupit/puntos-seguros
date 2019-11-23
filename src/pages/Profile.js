import React, { Component } from 'react';

const usertMockData = {
  imagen: '',
  nombre: 'John Doe',
  telefono: '0-11-22-33',
  correo: 'johndoe@example.ex',
  emergencyContacts: [
    {
      nombre: 'papa',
      numero: '99 99 88 77 66',
    },
    {
      nombre: 'hermano',
      numero: '33 33 44 55 66',
    }],
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: 'Profile',
      user: {},
      isCreateEmergencyContactVisible: false,
    };

    this.showcreateEmergencyContactModal = this.showcreateEmergencyContactModal.bind(this);
    this.hidecreateEmergencyContactModal = this.hidecreateEmergencyContactModal.bind(this);
    this.handleCreateEmergencyContact = this.handleCreateEmergencyContact.bind(this);
  }

  componentDidMount() {
    this.setState({ user: { ...usertMockData } });
  }

  showcreateEmergencyContactModal() {
    this.setState({ isCreateEmergencyContactVisible: true });
  }

  hidecreateEmergencyContactModal() {
    this.setState({ isCreateEmergencyContactVisible: false });
  }

  handleCreateEmergencyContact(contact) {
    this.setState((state) => {
      const { emergencyContacts: allEmergencyContacts } = state;
      return { emergencyContacts: [...allEmergencyContacts, contact] };
    }, this.hidecreateEmergencyContactModal);
  }

  render() {
    const { pagina } = this.state;
    return <div>{`Hola Mundo! estas en: ${pagina}`}</div>;
  }
}

export default Profile;
