import React, { Component } from "react";
import { IonContent } from "@ionic/react";
import ProfileForm from "../components/ProfileForm/index";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: "Profile"
    };
  }

  render() {
    return (
      <IonContent>
        <ProfileForm></ProfileForm>
      </IonContent>
    );
  }
}

export default Profile;
