import React, { useState } from 'react';
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonSegment, 
  IonSegmentButton,
  IonLabel
} from '@ionic/react';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

const Auth: React.FC = () => {
  const [segment, setSegment] = useState<'login'|'register'>('login');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{segment === 'login' ? 'Login' : 'Register'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSegment 
          value={segment} 
          onIonChange={e => setSegment(e.detail.value as 'login'|'register')}
        >
          <IonSegmentButton value="login">
            <IonLabel>Login</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="register">
            <IonLabel>Register</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {segment === 'login' ? <LoginForm /> : <RegisterForm />}
      </IonContent>
    </IonPage>
  );
};

export default Auth;