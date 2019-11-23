import React from "react";
import {
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from "@ionic/react";
import { contact as contactIcon } from "ionicons/icons";
import { EditButton } from "./index.style";

const ContactList = ({ contacts }) => {
  return contacts.map(({ name, phone }, index) => (
    <IonCard key={index}>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size="2">
              <IonIcon icon={contactIcon} size="large" />
            </IonCol>
            <IonCol size="10">
              <IonRow>
                <IonCol size="12">{name}</IonCol>
                <IonCol size="12">{phone}</IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" offset="10">
              <EditButton>Editar</EditButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  ));
};

export default ContactList;
