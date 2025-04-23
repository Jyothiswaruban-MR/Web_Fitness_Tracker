import React, { useState, useContext } from 'react';
import { 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonAlert 
} from '@ionic/react';
import { AuthContext } from '../../contexts/AuthContext';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const { login } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    } else {
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

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Error"
        message="Please enter both email and password"
        buttons={['OK']}
      />
    </>
  );
};

export default LoginForm;