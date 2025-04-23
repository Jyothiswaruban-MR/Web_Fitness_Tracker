// src/components/Fitness/StepCounter.tsx
import React, { useContext } from 'react';
import { IonButton, IonText } from '@ionic/react';
import { FitnessContext } from '../../contexts/FitnessContext';

const StepCounter = () => {
  const { data, updateSteps } = useContext(FitnessContext);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <IonText style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        {data.steps}
      </IonText>
      <p style={{ fontSize: '1.2rem' }}>Steps Today</p>
      <IonButton onClick={() => updateSteps(data.steps + 1000)}>
        +1000 Steps
      </IonButton>
    </div>
  );
};

// THIS IS THE CRITICAL LINE THAT MUST EXIST:
export default StepCounter; // ← Must have default export