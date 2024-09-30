import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
function Menu() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonToolbar>
          <IonTitle>Function</IonTitle>
        </IonToolbar>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
        </IonMenu>
        
        <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Logishub Object Detection Tool</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    </>
  );
}
export default Menu;