import React from "react";
import {
  IonContent,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonIcon
} from "@ionic/react";
import { close } from "ionicons/icons";
import { IonButtonFromIonic, Title, CloseIcon } from "./index.styled";

const ContactForm = ({ addContact, toggleModal }) => {
  let contact = { name: "", phone: "" };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    contact[name] = value;
  };
  return (
    <IonContent>
      <IonGrid>
        <Title>Agregar información de contacto</Title>
        <CloseIcon icon={close} onClick={() => toggleModal()} />
        <IonRow>
          <IonCol size="12"></IonCol>
          <IonCol size="12">
            <IonItem>
              <IonInput
                type="text"
                name="name"
                placeholder="Nombre completo"
                onIonChange={handleChange}
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size="12">
            <IonItem>
              <IonInput
                type="number"
                name="phone"
                placeholder="Teléfono"
                onIonChange={handleChange}
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size="12" offset="8">
            <IonButtonFromIonic onClick={() => addContact(contact)}>
              Agregar
            </IonButtonFromIonic>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default ContactForm;
