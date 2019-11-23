import React, { Component } from "react";
import { IonContent } from "@ionic/react";
import ContactList from "../components/ContactList/index";
import FabButton from "../components/FabButton/index";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: "Contacts"
    };
  }

  render() {
    const contacts = [
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
    ];
    return (
      <IonContent>
        <ContactList contacts={contacts}></ContactList>
        <FabButton />
      </IonContent>
    );
  }
}

export default Contacts;
