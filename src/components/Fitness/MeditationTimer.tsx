// src/components/Fitness/MeditationTimer.tsx
import React, { useState, useRef } from 'react';
import { IonButton, IonText } from '@ionic/react';

const MeditationTimer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="meditation-timer">
      <IonText className="timer-text">
        {formatTime(time)}
      </IonText>

      <IonButton expand="block" color="success" onClick={startTimer} disabled={isRunning}>
        Start Meditation
      </IonButton>

      <IonButton expand="block" color="medium" onClick={stopTimer} disabled={!isRunning}>
        Pause
      </IonButton>

      <IonButton expand="block" color="danger" onClick={resetTimer}>
        Reset
      </IonButton>
    </div>
  );
};

export default MeditationTimer;
