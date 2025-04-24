// src/components/Fitness/StepCounter.tsx
import React, { useContext } from 'react';
import {
  IonButton,
  IonText,
  IonIcon,
  IonCardHeader,
  IonCardTitle
} from '@ionic/react';
import { walk } from 'ionicons/icons';
import { FitnessContext } from '../../contexts/FitnessContext';

const StepCounter: React.FC = () => {
  const { data, updateSteps } = useContext(FitnessContext);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <IonCardHeader>
        <IonCardTitle>
          <IonIcon icon={walk} style={{ marginRight: '8px' }} />
          Step Counter
        </IonCardTitle>
      </IonCardHeader>

      <IonText style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block' }}>
        {data.steps}
      </IonText>
      <IonText style={{ fontSize: '1.2rem', display: 'block', marginBottom: '10px' }}>
        Steps Today
      </IonText>

      <IonButton expand="block" onClick={() => updateSteps(data.steps + 1000)}>
        +1000 Steps
      </IonButton>
    </div>
  );
};

export default StepCounter;