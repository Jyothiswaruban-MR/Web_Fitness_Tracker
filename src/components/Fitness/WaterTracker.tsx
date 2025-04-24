import React, { useContext } from 'react';
import {
  IonButton,
  IonText,
  IonIcon,
  IonCardHeader,
  IonCardTitle
} from '@ionic/react';
import { water } from 'ionicons/icons';
import { FitnessContext } from '../../contexts/FitnessContext';

const WaterTracker: React.FC = () => {
  const { data, updateWater } = useContext(FitnessContext);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <IonCardHeader>
        <IonCardTitle>
          <IonIcon icon={water} style={{ marginRight: '8px' }} />
          Water Intake
        </IonCardTitle>
      </IonCardHeader>
      <IonText style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>
        {data.water} ml
      </IonText>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <IonButton expand="block" onClick={() => updateWater(data.water + 250)}>
          +250ml
        </IonButton>
        <IonButton expand="block" onClick={() => updateWater(data.water + 500)}>
          +500ml
        </IonButton>
      </div>
    </div>
  );
};

export default WaterTracker;