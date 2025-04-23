import React, { createContext, useState, useEffect } from 'react';

interface FitnessData {
  steps: number;
  water: number;
  sleep: number;
  workouts: string[];
}

export const FitnessContext = createContext<{
  data: FitnessData;
  updateSteps: (steps: number) => void;
  updateWater: (ml: number) => void;
  updateSleep: (hours: number) => void;
  addWorkout: (workout: string) => void;
}>({
  data: { steps: 0, water: 0, sleep: 0, workouts: [] },
  updateSteps: () => {},
  updateWater: () => {},
  updateSleep: () => {},
  addWorkout: () => {},
});

export const FitnessProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<FitnessData>(() => {
    const saved = localStorage.getItem('fitnessData');
    return saved ? JSON.parse(saved) : { 
      steps: 0, 
      water: 0, 
      sleep: 0, 
      workouts: [] 
    };
  });

  useEffect(() => {
    localStorage.setItem('fitnessData', JSON.stringify(data));
  }, [data]);

  return (
    <FitnessContext.Provider value={{
      data,
      updateSteps: (steps) => setData(d => ({ ...d, steps })),
      updateWater: (water) => setData(d => ({ ...d, water })),
      updateSleep: (sleep) => setData(d => ({ ...d, sleep })),
      addWorkout: (workout) => 
        setData(d => ({ ...d, workouts: [...d.workouts, workout] })),
    }}>
      {children}
    </FitnessContext.Provider>
  );
};