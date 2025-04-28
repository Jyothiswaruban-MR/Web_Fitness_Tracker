import React, { useState, useContext, useEffect } from 'react';
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
  
  // Form state
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // UI state
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // Email validation
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Reset form
  const resetForm = () => {
    setEmail('');
    setName('');
    setPassword('');
    setConfirmPassword('');
  };

  // Handle redirection after successful registration
  useEffect(() => {
    let redirectTimer: NodeJS.Timeout;
    
    if (isRegistered) {
      redirectTimer = setTimeout(() => {
        history.push('/auth');
        resetForm();
      }, 1500);
    }
    
    return () => {
      if (redirectTimer) clearTimeout(redirectTimer);
    };
  }, [isRegistered, history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Comprehensive validation with clear error messages
    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      setShowAlert(true);
      return;
    }
    
    if (!email.trim()) {
      setErrorMsg("Please enter your email address.");
      setShowAlert(true);
      return;
    }
    
    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setShowAlert(true);
      return;
    }
    
    if (!password) {
      setErrorMsg("Please enter a password.");
      setShowAlert(true);
      return;
    }
    
    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters.");
      setShowAlert(true);
      return;
    }
    
    // Check if passwords match - this is the key validation you're having issues with
    if (password !== confirmPassword) {
      console.log("Password:", password, "Confirm:", confirmPassword);
      setErrorMsg("Passwords don't match.");
      setShowAlert(true);
      return;
    }
    
    try {
      // Register user (should return success/failure)
      const success = register(email, name, password);
      
      if (success) {
        console.log("Registration successful, showing toast");
        setShowToast(true);
        setIsRegistered(true);
        // Redirection happens via useEffect
      } else {
        setErrorMsg("Registration failed. Email may already be in use.");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMsg("Registration failed. Please try again.");
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
      
      {/* Error Alert */}
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Registration Error"
        message={errorMsg}
        buttons={['OK']}
      />
      
      {/* Success Toast */}
      <IonToast
        isOpen={showToast}
        message="Registration successful! Redirecting to login page..."
        duration={1500}
        position="bottom"
        color="success"
      />
    </>
  );
};

export default RegisterForm;