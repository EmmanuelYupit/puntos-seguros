/* eslint-disable */
import React from "react";
import { IonFabButton, IonIcon } from '@ionic/react';
import { locate, call, more } from 'ionicons/icons'
import { NavWrapp } from './index.styled'

const QuikNavComponent = () => {
    return (<NavWrapp>
        <IonFabButton color="light">
            <IonIcon icon={locate} />
        </IonFabButton>
        <IonFabButton color="light">
            <IonIcon icon={call} />
        </IonFabButton>
        {/*<IonFabButton color="light">
            <IonIcon icon={more} />
    </IonFabButton>*/}
    </NavWrapp>)
}

export default QuikNavComponent;
