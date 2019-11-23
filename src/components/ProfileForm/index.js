import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonItem,
  IonInput
} from "@ionic/react";

const ProfileForm = () => {
  const url =
    "https://media4.s-nbcnews.com/j/newscms/2019_47/3112746/191121-baby-yoda-cs-959a_ed40d38efa3cde7ab92df2d5492a81a5.fit-760w.jpg";
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="4">
          <IonImg src={url} />
        </IonCol>
        <IonCol size="8">
          <IonRow>
            <IonCol size="12">Nombre:</IonCol>
            <IonCol size="12">
              <IonItem>
                <IonInput placeholder="Nombre completo"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonCol>
        <IonCol size="4">Teléfono:</IonCol>
        <IonCol size="8">
          <IonItem>
            <IonInput type="number" placeholder="999-999-9999"></IonInput>
          </IonItem>
        </IonCol>
        <IonCol size="4">Correo:</IonCol>
        <IonCol size="8">
          <IonItem>
            <IonInput type="email" placeholder="user@example.com"></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ProfileForm;
