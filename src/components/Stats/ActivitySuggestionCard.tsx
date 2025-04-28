// src/components/Stats/ActivitySuggestionCard.tsx
import React, { useEffect, useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner } from '@ionic/react';

const ActivitySuggestionCard: React.FC = () => {
  const [activity, setActivity] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        setActivity(data.activity);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching activity:', error);
        setActivity('Go for a walk and refresh yourself!');
        setLoading(false);
      });
  }, []);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>🎯 Activity Suggestion</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {loading ? <IonSpinner name="dots" /> : <p>{activity}</p>}
      </IonCardContent>
    </IonCard>
  );
};

export default ActivitySuggestionCard;
