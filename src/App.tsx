import React, { useContext } from 'react';
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import {
  home,
  statsChart,
  water,
  moon,
  person,
  settings,
  fitness
} from 'ionicons/icons';

import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { FitnessProvider } from './contexts/FitnessContext';

import Home from './pages/Home';
import Stats from './pages/Stats';
import Auth from './pages/Auth';
import Settings from './pages/Settings';
import Water from './pages/Water';
import Sleep from './pages/Sleep';
import Workout from './pages/Workout';
import Intro from './pages/Intro';
import Splash from './pages/Splash'; // 🆕 New splash screen

const AppRoutes: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <IonTabs>
      <IonRouterOutlet>

        {/* 🆕 Splash Screen as First Route */}
        <Route exact path="/">
          <Splash />
        </Route>

        {/* 🚪 Public Routes */}
        <Route exact path="/intro">
          {!user ? <Intro /> : <Redirect to="/home" />}
        </Route>
        <Route exact path="/auth">
          {!user ? <Auth /> : <Redirect to="/home" />}
        </Route>

        {/* 🔒 Private Routes */}
        <Route exact path="/home">
          {user ? <Home /> : <Redirect to="/intro" />}
        </Route>
        <Route exact path="/stats">
          {user ? <Stats /> : <Redirect to="/intro" />}
        </Route>
        <Route exact path="/settings">
          {user ? <Settings /> : <Redirect to="/intro" />}
        </Route>
        <Route exact path="/water">
          {user ? <Water /> : <Redirect to="/intro" />}
        </Route>
        <Route exact path="/sleep">
          {user ? <Sleep /> : <Redirect to="/intro" />}
        </Route>
        <Route exact path="/workout">
          {user ? <Workout /> : <Redirect to="/intro" />}
        </Route>

        {/* 🌐 Redirect unknown routes */}
        <Redirect to="/" />
      </IonRouterOutlet>

      {/* 🧭 Show bottom tabs only when logged in */}
      {user && (
        <IonTabBar slot="bottom" className="custom-tab-bar">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="water" href="/water">
            <IonIcon icon={water} />
            <IonLabel>Water</IonLabel>
          </IonTabButton>
          <IonTabButton tab="workout" href="/workout">
            <IonIcon icon={fitness} />
            <IonLabel>Workout</IonLabel>
          </IonTabButton>
          <IonTabButton tab="stats" href="/stats">
            <IonIcon icon={statsChart} />
            <IonLabel>Stats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settings} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      )}
    </IonTabs>
  );
};

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <FitnessProvider>
        <IonReactRouter>
          <AppRoutes />
        </IonReactRouter>
      </FitnessProvider>
    </AuthProvider>
  </IonApp>
);

export default App;