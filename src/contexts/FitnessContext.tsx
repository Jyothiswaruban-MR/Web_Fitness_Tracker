import React, { createContext, useState, useEffect } from 'react';

// Define the shape of our fitness data, now includes mood
interface FitnessData {
  steps: number;
  water: number;
  sleep: number;
  workouts: string[];
  mood: string;
}

// Create the context with default values and type
export const FitnessContext = createContext<{
  data: FitnessData;
  updateSteps: (steps: number) => void;
  updateWater: (ml: number) => void;
  updateSleep: (hours: number) => void;
  addWorkout: (workout: string) => void;
  updateMood: (mood: string) => void;
}>({
  data: { steps: 0, water: 0, sleep: 0, workouts: [], mood: 'Neutral' },
  updateSteps: () => {},
  updateWater: () => {},
  updateSleep: () => {},
  addWorkout: () => {},
  updateMood: () => {},
});

// Provider that wraps the app and supplies the context values
export const FitnessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial state from localStorage or use defaults
  const [data, setData] = useState<FitnessData>(() => {
    const saved = localStorage.getItem('fitnessData');
    return saved
      ? JSON.parse(saved)
      : { steps: 0, water: 0, sleep: 0, workouts: [], mood: 'Neutral' };
  });

  // Sync context data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fitnessData', JSON.stringify(data));
  }, [data]);

  // Context update functions for each field
  const updateSteps = (steps: number) => setData(prev => ({ ...prev, steps }));
  const updateWater = (water: number) => setData(prev => ({ ...prev, water }));
  const updateSleep = (sleep: number) => setData(prev => ({ ...prev, sleep }));
  const updateMood = (mood: string) => setData(prev => ({ ...prev, mood }));
  const addWorkout = (workout: string) => setData(prev => ({ ...prev, workouts: [...prev.workouts, workout] }));

  return (
    <FitnessContext.Provider value={{ data, updateSteps, updateWater, updateSleep, addWorkout, updateMood }}>
      {children}
    </FitnessContext.Provider>
  );
};