import React, { useState, useContext } from 'react';
import { 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonAlert 
} from '@ionic/react';
import { AuthContext } from '../../contexts/AuthContext';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const { register } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && password && password === confirmPassword) {
      register(email, name, password);
    } else {
      setShowAlert(true);
    }
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

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Error"
        message={password !== confirmPassword 
          ? "Passwords don't match" 
          : "Please fill all fields"}
        buttons={['OK']}
      />
    </>
  );
};

export default RegisterForm;