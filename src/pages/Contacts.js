import React, { Component } from "react";
import { IonContent, IonModal } from "@ionic/react";
import ContactList from "../components/ContactList/index";
import FabButton from "../components/FabButton/index";
import ContactForm from "../components/ContactForm/index";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: "Contacts",
      showModal: false,
      contacts: [
        {
          name: "Loretta Anderson",
          phone: "(913) 518-2579"
        },
        {
          name: "Dona Guzman",
          phone: "(870) 557-3995"
        },
        {
          name: "Willa Park",
          phone: "(840) 539-3759"
        },
        {
          name: "Hale Goff",
          phone: "(949) 536-3233"
        },
        {
          name: "Pearl Moody",
          phone: "(856) 405-3314"
        }
      ]
    };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  addContact = contact => {
    this.toggleModal();
  };

  render() {
    return (
      <IonContent>
        <ContactList contacts={this.state.contacts}></ContactList>
        <IonModal isOpen={this.state.showModal}>
          <ContactForm
            addContact={this.addContact}
            toggleModal={this.toggleModal}
          />
        </IonModal>
        <FabButton toggleModal={this.toggleModal} />
      </IonContent>
    );
  }
}

export default Contacts;
