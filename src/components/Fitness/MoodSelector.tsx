import React, { useContext } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import { FitnessContext } from '../../contexts/FitnessContext';

// Dropdown component for selecting user's current mood
const MoodSelector: React.FC = () => {
  const { data, updateMood } = useContext(FitnessContext);

  return (
    <IonItem>
      <IonLabel>Mood</IonLabel>
      <IonSelect value={data.mood} placeholder="Select mood" onIonChange={e => updateMood(e.detail.value)}>
        <IonSelectOption value="Happy">😊 Happy</IonSelectOption>
        <IonSelectOption value="Sad">😔 Sad</IonSelectOption>
        <IonSelectOption value="Stressed">😫 Stressed</IonSelectOption>
        <IonSelectOption value="Relaxed">😌 Relaxed</IonSelectOption>
        <IonSelectOption value="Neutral">😐 Neutral</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default MoodSelector;