import React from 'react';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { home, statsChart, water, moon, person, settings } from 'ionicons/icons';
import { AuthProvider } from './contexts/AuthContext';
import { FitnessProvider } from './contexts/FitnessContext';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Auth from './pages/Auth';
import Settings from './pages/Settings';
import Water from './pages/Water';
import Sleep from './pages/Sleep';
import Workout from './pages/Workout';

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <FitnessProvider>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home" component={Home} />
              <Route exact path="/stats" component={Stats} />
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/water" component={Water} />
              <Route exact path="/sleep" component={Sleep} />
              <Route exact path="/workout" component={Workout} />
              <Redirect exact from="/" to="/home" />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="water" href="/water">
                <IonIcon icon={water} />
                <IonLabel>Water</IonLabel>
              </IonTabButton>
              <IonTabButton tab="sleep" href="/sleep">
                <IonIcon icon={moon} />
                <IonLabel>Sleep</IonLabel>
              </IonTabButton>
              <IonTabButton tab="stats" href="/stats">
                <IonIcon icon={statsChart} />
                <IonLabel>Stats</IonLabel>
              </IonTabButton>
              <IonTabButton tab="auth" href="/auth">
                <IonIcon icon={person} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </FitnessProvider>
    </AuthProvider>
  </IonApp>
);

export default App;