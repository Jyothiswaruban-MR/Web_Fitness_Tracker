import React, { useEffect } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';

import './Splash.css'; // 💅 Custom styles

const Splash: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    // ✅ Mark splash was shown, then go to Intro
    sessionStorage.setItem('fromSplash', 'true');
    const timer = setTimeout(() => {
      history.push('/intro');
    }, 1500); // ⏱ 1.5 seconds

    return () => clearTimeout(timer); // cleanup
  }, [history]);

  return (
    <IonPage>
      <IonContent className="splash-content">
        <img src="/logo.jpg" alt="App Logo" className="splash-logo" />
      </IonContent>
    </IonPage>
  );
};

export default Splash;