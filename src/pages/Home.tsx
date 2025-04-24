import React, { useContext } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton
} from '@ionic/react';
import {
  walk,
  water,
  moon,
  happy,
  bulb,
  logOutOutline
} from 'ionicons/icons';

import StepCounter from '../components/Fitness/StepCounter';
import WaterTracker from '../components/Fitness/WaterTracker';
import SleepTracker from '../components/Fitness/SleepTracker';
import MoodSelector from '../components/Fitness/MoodSelector';

import { FitnessContext } from '../contexts/FitnessContext';
import { AuthContext } from '../contexts/AuthContext'; // Used for showing user & logout

import './Home.css'; // Styling file

const Home: React.FC = () => {
  const { data } = useContext(FitnessContext); //  Steps, sleep, water, mood
  const { user, logout } = useContext(AuthContext); // Current user info + logout

  return (
    <IonPage>
      {/* Top bar */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* 👋 Welcome card */}
        <IonCard className="summary-card">
          <IonCardHeader>
            <IonCardTitle className="page-title">
              👋 Welcome Back, {user?.name || 'Guest'}!
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="summary-text">
            <p><IonIcon icon={moon} /> Sleep: {data.sleep} hours</p>
            <p><IonIcon icon={water} /> Water Intake: {data.water} L</p>
            <p><IonIcon icon={happy} /> Mood: {data.mood}</p>
          </IonCardContent>
        </IonCard>

        {/* Mood selector */}
        <IonCard className="mood-card">
          <IonCardHeader>
            <IonCardTitle className="card-header-icon">How are you feeling?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <MoodSelector />
          </IonCardContent>
        </IonCard>

        {/* Step counter */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="card-header-icon">
              <IonIcon icon={walk} /> Step Counter
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <StepCounter />
          </IonCardContent>
        </IonCard>

        {/* Water & Sleep trackers */}
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle className="card-header-icon">
                    <IonIcon icon={water} /> Water Tracker
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <WaterTracker />
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle className="card-header-icon">
                    <IonIcon icon={moon} /> Sleep Tracker
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <SleepTracker />
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Health Tip */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="card-header-icon">
              <IonIcon icon={bulb} /> Health Tip
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="health-tip">
            “Drink more water and stretch every hour to stay energized!”
          </IonCardContent>
        </IonCard>

        {/* Logout Button */}
        <div className="logout-button">
          <IonButton expand="block" color="danger" onClick={logout}>
            <IonIcon icon={logOutOutline} slot="start" />
            Logout
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;