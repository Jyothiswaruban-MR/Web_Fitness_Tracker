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

const RegisterForm: React.FC = () => {
  const { register } = useContext(AuthContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ❌ Validation: all fields must be filled and passwords match
    if (!email || !name || !password || password !== confirmPassword) {
      setShowAlert(true);
      return;
    }

    // ✅ Register user (stored in users[] but not logged in)
    register(email, name, password);
    setShowToast(true);

    // ⏳ After toast, go back to login screen
    setTimeout(() => {
      history.push('/auth');
    }, 1500);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput
            value={name}
            onIonChange={(e) => setName(e.detail.value!)}
            required
          />
        </IonItem>

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

        <IonItem>
          <IonLabel position="floating">Confirm Password</IonLabel>
          <IonInput
            type="password"
            value={confirmPassword}
            onIonChange={(e) => setConfirmPassword(e.detail.value!)}
            required
          />
        </IonItem>

        <IonButton expand="block" type="submit" className="ion-margin-top">
          Register
        </IonButton>
      </form>

      {/* ❌ Field error */}
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Registration Error"
        message={
          password !== confirmPassword
            ? "Passwords don't match"
            : "Please fill out all fields"
        }
        buttons={['OK']}
      />

      {/* ✅ Success toast */}
      <IonToast
        isOpen={showToast}
        message="Registration successful! Please log in."
        duration={1500}
        position="bottom"
        color="success"
      />
    </>
  );
};

export default RegisterForm;