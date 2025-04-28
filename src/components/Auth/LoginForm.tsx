import React, { useState, useContext, useRef } from 'react';
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
  const formRef = useRef<HTMLFormElement>(null);

  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Access current values directly from form inputs
    const form = formRef.current;
    if (!form) return;
    
    const formElements = form.elements as typeof form.elements & {
      email: HTMLInputElement;
      password: HTMLInputElement;
    };

    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();

    // Validate inputs
    if (!email || !password) {
      setErrorMsg("Please enter both email and password");
      setShowAlert(true);
      setIsSubmitting(false);
      return;
    }

    try {
      login(email, password);
      setShowToast(true);
      setTimeout(() => {
        history.push('/home');
      }, 1000);
    } catch (error) {
      setErrorMsg("Login failed. Please check your credentials.");
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput 
            name="email"
            type="email" 
            required 
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput 
            name="password"
            type="password" 
            required 
          />
        </IonItem>

        <IonButton 
          expand="block" 
          type="submit" 
          className="ion-margin-top"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </IonButton>
      </form>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Login Error"
        message={errorMsg}
        buttons={['OK']}
      />

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