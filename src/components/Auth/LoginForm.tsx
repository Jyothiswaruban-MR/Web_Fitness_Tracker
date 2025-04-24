import React, { useState, useContext } from 'react';
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAlert,
  IonToast
} from '@ionic/react';
import { AuthContext } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg("Please enter both email and password");
      setShowAlert(true);
      return;
    }

    // Use login function from AuthContext
    try {
      login(email, password);
      setShowToast(true);
      setTimeout(() => {
        history.push('/home');
      }, 1000);
    } catch (error) {
      setErrorMsg("Login failed. Make sure you're registered.");
      setShowAlert(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            required
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            required
          />
        </IonItem>

        <IonButton expand="block" type="submit" className="ion-margin-top">
          Login
        </IonButton>
      </form>

      {/* Error Alert */}
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Login Error"
        message={errorMsg}
        buttons={['OK']}
      />

      {/* Success Toast */}
      <IonToast
        isOpen={showToast}
        message="Login successful!"
        duration={1500}
        position="bottom"
        color="success"
      />
    </>
  );
};

export default LoginForm;