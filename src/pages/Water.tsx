import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import WaterTracker from '../components/Fitness/WaterTracker';

const Water: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Water Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <WaterTracker />
      </IonContent>
    </IonPage>
  );
};

export default Water;