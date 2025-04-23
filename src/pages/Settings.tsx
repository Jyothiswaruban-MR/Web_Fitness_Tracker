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
  IonSelect,
  IonSelectOption,
  IonRange,
  IonButton
} from '@ionic/react';
import { moon, notifications, body } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Settings: React.FC = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [stepGoal, setStepGoal] = useState(10000);
  const [waterGoal, setWaterGoal] = useState(2000);
  const [unitSystem, setUnitSystem] = useState<'metric'|'imperial'>('metric');

  const handleLogout = () => {
    logout();
    history.push('/auth');
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
          {/* Appearance Settings */}
          <IonItem>
            <IonIcon icon={moon} slot="start" />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle 
              checked={darkMode} 
              onIonChange={e => setDarkMode(e.detail.checked)} 
            />
          </IonItem>

          {/* Notification Settings */}
          <IonItem>
            <IonIcon icon={notifications} slot="start" />
            <IonLabel>Enable Notifications</IonLabel>
            <IonToggle 
              checked={notificationsEnabled} 
              onIonChange={e => setNotificationsEnabled(e.detail.checked)}
            />
          </IonItem>

          {/* Fitness Goals */}
          <IonItem>
            <IonIcon icon={body} slot="start" />
            <IonLabel>Daily Step Goal: {stepGoal}</IonLabel>
            <IonRange 
              min={2000} 
              max={20000} 
              step={500}
              value={stepGoal}
              onIonChange={e => setStepGoal(e.detail.value as number)}
            />
          </IonItem>

          <IonItem>
            <IonLabel>Water Intake Goal (ml): {waterGoal}</IonLabel>
            <IonRange 
              min={500} 
              max={4000} 
              step={250}
              value={waterGoal}
              onIonChange={e => setWaterGoal(e.detail.value as number)}
            />
          </IonItem>

          {/* Units System */}
          <IonItem>
            <IonLabel>Measurement Units</IonLabel>
            <IonSelect 
              value={unitSystem}
              placeholder="Select Unit System"
              onIonChange={e => setUnitSystem(e.detail.value)}
            >
              <IonSelectOption value="metric">Metric (km, ml)</IonSelectOption>
              <IonSelectOption value="imperial">Imperial (miles, oz)</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        {/* Logout Button */}
        <div style={{ padding: '20px' }}>
          <IonButton 
            expand="block" 
            color="danger"
            onClick={handleLogout}
          >
            Log Out
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;