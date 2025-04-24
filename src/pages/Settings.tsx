import React, { useContext, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonToast
} from '@ionic/react';
import { AuthContext } from '../contexts/AuthContext';

const Settings: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const [showToast, setShowToast] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [stepGoal, setStepGoal] = useState(10000);
  const [waterGoal, setWaterGoal] = useState(2000);
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');

  const handleLogout = () => {
    logout();
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>

          {/* 👤 Show user info */}
          <IonItem>
            <IonLabel>
              <strong>User:</strong> {user?.name || 'Anonymous'}
              <br />
              <strong>Email:</strong> {user?.email || 'Not available'}
            </IonLabel>
          </IonItem>

          {/* Appearance */}
          <IonItem>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle checked={darkMode} onIonChange={(e) => setDarkMode(e.detail.checked)} />
          </IonItem>

          {/* Notifications */}
          <IonItem>
            <IonLabel>Enable Notifications</IonLabel>
            <IonToggle checked={notificationsEnabled} onIonChange={(e) => setNotificationsEnabled(e.detail.checked)} />
          </IonItem>

          {/* Goals */}
          <IonItem>
            <IonLabel>Daily Step Goal: {stepGoal}</IonLabel>
            <IonRange
              min={2000}
              max={20000}
              step={500}
              value={stepGoal}
              onIonChange={(e) => setStepGoal(e.detail.value as number)}
            />
          </IonItem>

          <IonItem>
            <IonLabel>Water Goal (ml): {waterGoal}</IonLabel>
            <IonRange
              min={500}
              max={4000}
              step={250}
              value={waterGoal}
              onIonChange={(e) => setWaterGoal(e.detail.value as number)}
            />
          </IonItem>

          {/* Units */}
          <IonItem>
            <IonLabel>Measurement Units</IonLabel>
            <IonSelect value={unitSystem} onIonChange={(e) => setUnitSystem(e.detail.value)}>
              <IonSelectOption value="metric">Metric (km, ml)</IonSelectOption>
              <IonSelectOption value="imperial">Imperial (mi, oz)</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        {/* 🔴 Logout Button */}
        <div style={{ padding: '20px' }}>
          <IonButton expand="block" color="danger" onClick={handleLogout}>
            Log Out
          </IonButton>
        </div>

        {/* ✅ Logout Toast */}
        <IonToast
          isOpen={showToast}
          message="You have been logged out."
          duration={1500}
          color="warning"
          position="bottom"
        />
      </IonContent>
    </IonPage>
  );
};

export default Settings;