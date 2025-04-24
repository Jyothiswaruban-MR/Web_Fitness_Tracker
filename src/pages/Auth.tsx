import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';
import './Auth.css'; // Make sure this import is included

const Auth: React.FC = () => {
  const [segment, setSegment] = useState<'login' | 'register'>('login');
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{segment === 'login' ? 'Login' : 'Register'}</IonTitle>
          <IonButton slot="start" fill="clear" onClick={() => history.push('/intro')}>
            Back to Intro
          </IonButton>
        </IonToolbar>
      </IonHeader>

      {/* Centered layout */}
      <IonContent className="auth-background">
        <div className="auth-center-wrapper">
          <div className="auth-wrapper">

            {/* Login/Register Tabs */}
            <IonSegment
              value={segment}
              onIonChange={(e) => setSegment(e.detail.value as 'login' | 'register')}
              className="auth-segment"
            >
              <IonSegmentButton value="login">
                <IonLabel>Login</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="register">
                <IonLabel>Register</IonLabel>
              </IonSegmentButton>
            </IonSegment>

            {/* Login/Register Form Card */}
            <IonCard className="auth-card">
              <IonCardHeader>
                <IonCardTitle className="auth-card-title">
                  {segment === 'login' ? 'Welcome Back!' : 'Create Your Account'}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {segment === 'login' ? <LoginForm /> : <RegisterForm />}
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Auth;