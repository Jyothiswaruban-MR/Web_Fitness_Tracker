import React, { useState, useContext } from 'react';
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon
} from '@ionic/react';
import { fitness } from 'ionicons/icons';
import { FitnessContext } from '../../contexts/FitnessContext';

const WorkoutLog: React.FC = () => {
  const [workout, setWorkout] = useState('');
  const { data, addWorkout } = useContext(FitnessContext);

  const handleAddWorkout = () => {
    if (workout.trim()) {
      addWorkout(workout.trim());
      setWorkout('');
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          <IonIcon icon={fitness} style={{ marginRight: '8px' }} />
          Workout Log
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>

        <IonList>
          {data.workouts.length > 0 ? (
            data.workouts.map((w, i) => (
              <IonItem key={i}>
                <IonLabel>{w}</IonLabel>
              </IonItem>
            ))
          ) : (
            <IonItem>
              <IonLabel>No workouts logged yet</IonLabel>
            </IonItem>
          )}
        </IonList>

        <div style={{ marginTop: '20px' }}>
          <IonInput
            value={workout}
            placeholder="Enter workout"
            onIonChange={e => setWorkout(e.detail.value!)}
            fill="outline"
          />
          <IonButton
            expand="block"
            onClick={handleAddWorkout}
            style={{ marginTop: '10px' }}
          >
            Add Workout
          </IonButton>
        </div>

      </IonCardContent>
    </IonCard>
  );
};

export default WorkoutLog;