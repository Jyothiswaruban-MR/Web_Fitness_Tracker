import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import SleepTracker from '../components/Fitness/SleepTracker';

const Sleep: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sleep Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SleepTracker />
      </IonContent>
    </IonPage>
  );
};

export default Sleep;