/* eslint-disable */
import React from 'react';
import { IonFabButton, IonIcon } from '@ionic/react';
import { menu } from 'ionicons/icons'
import { Header } from './index.styled'
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButtons, IonMenuButton, IonMenuToggle, } from '@ionic/react';

const HeaderComponent = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar color="success">
                    <IonButtons slot='start'><IonIcon icon={menu} /></IonButtons>
                    <IonTitle>Inicio</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonMenu side="start" contentId="first">
                <IonHeader>
                    <IonToolbar color="success">
                        <IonTitle>Start Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
        </>
    )
}

export default HeaderComponent;
