import React, { useState, useContext, useEffect, useRef } from 'react';
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
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  });

  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleInputChange = (field: keyof typeof formData) => 
    (e: CustomEvent) => {
      const value = e.detail.value || '';
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

  const resetForm = () => {
    setFormData({
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    });
  };

  useEffect(() => {
    if (isRegistered) {
      const timer = setTimeout(() => {
        history.push('/auth');
        resetForm();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isRegistered, history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Use current values directly from form inputs
    const form = formRef.current;
    if (!form) return;
    
    const formElements = form.elements as typeof form.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      password: HTMLInputElement;
      confirmPassword: HTMLInputElement;
    };

    const name = formElements.name.value.trim();
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();
    const confirmPassword = formElements.confirmPassword.value.trim();

    // Validate name
    if (!name) {
      setErrorMsg("Please enter your name.");
      setShowAlert(true);
      setIsSubmitting(false);
      return;
    }

    // Validate email
    if (!email || !validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setShowAlert(true);
      setIsSubmitting(false);
      return;
    }

    // Validate password length
    if (!password || password.length < 6) {
      setErrorMsg("Password must be at least 6 characters.");
      setShowAlert(true);
      setIsSubmitting(false);
      return;
    }

    // Password mismatch check
    if (password !== confirmPassword) {
      setErrorMsg("Passwords don't match.");
      setShowAlert(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const success = register(email, name, password);
      if (success) {
        setShowToast(true);
        setIsRegistered(true);
      } else {
        setErrorMsg("Registration failed. Email may already be in use.");
        setShowAlert(true);
      }
    } catch (error) {
      setErrorMsg("Registration failed. Please try again.");
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput 
            name="name"
            value={formData.name}
            onIonChange={handleInputChange('name')} 
            required 
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput 
            name="email"
            type="email" 
            value={formData.email}
            onIonChange={handleInputChange('email')} 
            required 
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput 
            name="password"
            type="password" 
            value={formData.password}
            onIonChange={handleInputChange('password')}
            required 
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Confirm Password</IonLabel>
          <IonInput 
            name="confirmPassword"
            type="password" 
            value={formData.confirmPassword}
            onIonChange={handleInputChange('confirmPassword')}
            required 
          />
        </IonItem>
        <IonButton 
          expand="block" 
          type="submit" 
          className="ion-margin-top"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </IonButton>
      </form>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Registration Error"
        message={errorMsg}
        buttons={['OK']}
      />
      
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