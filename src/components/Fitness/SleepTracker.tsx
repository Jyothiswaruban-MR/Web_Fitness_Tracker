import React, { useContext } from 'react';
import { 
  IonRange, 
  IonText, 
  IonIcon,
  IonLabel,
  IonItem
} from '@ionic/react';
import { moon } from 'ionicons/icons';
import { FitnessContext } from '../../contexts/FitnessContext';

const SleepTracker: React.FC = () => {
  const { data, updateSleep } = useContext(FitnessContext);

  if (!data || updateSleep === undefined) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <IonText color="danger">Error: Sleep data not available</IonText>
      </div>
    );
  }

  return (
    <IonItem>
      <IonIcon icon={moon} slot="start" />
      <IonLabel>Sleep: {data.sleep} hours</IonLabel>
      <IonRange 
        min={0} 
        max={12} 
        step={0.5} 
        value={data.sleep}
        onIonChange={e => updateSleep(e.detail.value as number)}
        pin={true}
        snaps={true}
      >
        <IonLabel slot="start">0h</IonLabel>
        <IonLabel slot="end">12h</IonLabel>
      </IonRange>
    </IonItem>
  );
};

export default SleepTracker;