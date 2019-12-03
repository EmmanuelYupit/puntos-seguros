import React, { Component } from 'react';
import {
  IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton,
} from '@ionic/react';

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
    history.replace('/map');
  }

  render() {
    return (
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Nombre de Usuario</IonLabel>
                <IonInput type="text" />
              </IonItem>
              <IonItem>
                <IonLabel>Nombre</IonLabel>
                <IonInput type="text" />
              </IonItem>
              <IonItem>
                <IonLabel>Correo</IonLabel>
                <IonInput type="text" />
              </IonItem>
              <IonItem>
                <IonLabel>Contrasena</IonLabel>
                <IonInput type="password" />
              </IonItem>
              <IonItem>
                <IonButton onClick={this.handleUserRegister}>Registrarme</IonButton>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    );
  }
}

export default Register;
