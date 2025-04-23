import React, { useContext } from 'react';
import { IonButton, IonText, IonIcon } from '@ionic/react';
import { water } from 'ionicons/icons';
import { FitnessContext } from '../../contexts/FitnessContext';

const WaterTracker: React.FC = () => {
  const { data, updateWater } = useContext(FitnessContext);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <IonIcon icon={water} size="large" />
      <IonText style={{ fontSize: '2rem', display: 'block' }}>
        {data.water} ml
      </IonText>
      <div style={{ marginTop: '15px' }}>
        <IonButton onClick={() => updateWater(data.water + 250)}>+250ml</IonButton>
        <IonButton onClick={() => updateWater(data.water + 500)}>+500ml</IonButton>
      </div>
    </div>
  );
};

export default WaterTracker;