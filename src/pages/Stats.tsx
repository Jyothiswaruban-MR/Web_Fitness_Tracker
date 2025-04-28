import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import FitnessChart from '../components/Stats/FitnessChart';
import AdviceCard from '../components/Stats/AdviceCard';  // NEW
import ActivitySuggestionCard from '../components/Stats/ActivitySuggestionCard';  // NEW

const StatsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fitness Stats</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        {/* Existing Fitness Chart */}
        <FitnessChart />

        {/* New Daily Advice */}
        <AdviceCard />

        {/* New Activity Suggestion */}
        <ActivitySuggestionCard />
      </IonContent>
    </IonPage>
  );
};

export default StatsPage;
