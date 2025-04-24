import React, { useContext, useEffect } from 'react';
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonText
} from '@ionic/react';
import {
  waterOutline,
  moonOutline,
  walkOutline,
  barbellOutline,
  happyOutline,
  chevronForward
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../contexts/AuthContext';

import './Intro.css';

const Intro: React.FC = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  // ✅ Redirect logged-in users directly to home
  useEffect(() => {
    const redirectedFromSplash = sessionStorage.getItem('fromSplash');

    if (user && redirectedFromSplash !== 'true') {
      history.push('/home');
    }

    // clear after redirect
    sessionStorage.removeItem('fromSplash');
  }, [user, history]);

  return (
    <IonPage>
      <IonContent fullscreen className="intro-background ion-padding">
        <div className="intro-wrapper">

          <img src="/logo.jpg" alt="App Logo" className="intro-logo" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <IonCard className="intro-card">
              <IonCardHeader>
                <IonCardTitle className="intro-title">🌿 Daily Wellness</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="intro-content">
                <IonText>
                  <p className="intro-tagline">
                    Your personalized health companion.
                  </p>

                  <ul className="intro-features">
                    <li><IonIcon icon={waterOutline} /> Hydration Tracking</li>
                    <li><IonIcon icon={moonOutline} /> Sleep Monitoring</li>
                    <li><IonIcon icon={walkOutline} /> Step Counter</li>
                    <li><IonIcon icon={barbellOutline} /> Workout Logging</li>
                    <li><IonIcon icon={happyOutline} /> Mood Check-ins</li>
                  </ul>
                </IonText>

                <IonButton
                  expand="block"
                  color="primary"
                  className="intro-button"
                  onClick={() => history.push('/auth')}
                >
                  Get Started
                  <IonIcon icon={chevronForward} slot="end" />
                </IonButton>
              </IonCardContent>
            </IonCard>
          </motion.div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Intro;