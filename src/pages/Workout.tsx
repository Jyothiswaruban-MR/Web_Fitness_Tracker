import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import WorkoutLog from '../components/Fitness/WorkoutLog';

const Workout: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Workout Log</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <WorkoutLog />
      </IonContent>
    </IonPage>
  );
};

export default Workout;