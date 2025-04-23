import { IonButton, IonText } from '@ionic/react';
import { useState, useEffect } from 'react';

const StepCounter = () => {
  const [steps, setSteps] = useState(0);

  // Load saved steps from localStorage
  useEffect(() => {
    const savedSteps = localStorage.getItem('steps');
    if (savedSteps) setSteps(parseInt(savedSteps));
  }, []);

  // Save steps whenever they change
  useEffect(() => {
    localStorage.setItem('steps', steps.toString());
  }, [steps]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <IonText style={{ fontSize: '2rem' }}>{steps}</IonText>
      <p>Steps Today</p>
      <IonButton onClick={() => setSteps(steps + 100)}>
        Add 100 Steps
      </IonButton>
    </div>
  );
};
export default StepCounter;