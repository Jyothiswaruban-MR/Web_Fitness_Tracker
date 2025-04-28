import React, { useEffect, useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner } from '@ionic/react';

const AdviceCard: React.FC = () => {
  const [advice, setAdvice] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        setAdvice(data.slip.advice);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching advice:', error);
        setAdvice('Stay positive and keep moving!');
        setLoading(false);
      });
  }, []);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>💬 Daily Advice</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {loading ? <IonSpinner name="dots" /> : <p>{advice}</p>}
      </IonCardContent>
    </IonCard>
  );
};

export default AdviceCard;
