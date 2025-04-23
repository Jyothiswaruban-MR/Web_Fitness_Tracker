import React, { useState, useContext } from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import { FitnessContext } from '../../contexts/FitnessContext';

const WorkoutLog: React.FC = () => {
  const [workout, setWorkout] = useState('');
  const { data, addWorkout } = useContext(FitnessContext);

  return (
    <>
      <IonList>
        {data.workouts.map((w, i) => (
          <IonItem key={i}>
            <IonLabel>{w}</IonLabel>
          </IonItem>
        ))}
      </IonList>

      <div style={{ padding: '20px' }}>
        <IonInput
          value={workout}
          placeholder="Enter workout"
          onIonChange={e => setWorkout(e.detail.value!)}
        />
        <IonButton 
          expand="block" 
          onClick={() => {
            if (workout.trim()) {
              addWorkout(workout);
              setWorkout('');
            }
          }}
        >
          Add Workout
        </IonButton>
      </div>
    </>
  );
};

export default WorkoutLog;