import { useState, useEffect } from 'react';

const STORAGE_KEY = 'xaveco_online_count';
const STORAGE_TIME_KEY = 'xaveco_online_time';
const BASE_COUNT = 1607;

export const useOnlineCounter = () => {
  const [count, setCount] = useState(() => {
    // Get stored count or start at base
    const stored = localStorage.getItem(STORAGE_KEY);
    const storedTime = localStorage.getItem(STORAGE_TIME_KEY);
    
    if (stored && storedTime) {
      const timePassed = Date.now() - parseInt(storedTime, 10);
      const minutesPassed = Math.floor(timePassed / 60000);
      // Add some growth for time passed while away (1-2 per minute on average)
      const growth = Math.floor(minutesPassed * (1 + Math.random()));
      return Math.min(parseInt(stored, 10) + growth, BASE_COUNT + 500); // Cap at reasonable max
    }
    
    return BASE_COUNT;
  });

  useEffect(() => {
    // Save current count
    localStorage.setItem(STORAGE_KEY, count.toString());
    localStorage.setItem(STORAGE_TIME_KEY, Date.now().toString());
  }, [count]);

  useEffect(() => {
    const scheduleIncrement = () => {
      // Random interval between 30-90 seconds
      const interval = (30 + Math.random() * 60) * 1000;
      
      return setTimeout(() => {
        // Increment by 1-3
        const increment = Math.floor(Math.random() * 3) + 1;
        setCount(prev => {
          const newCount = prev + increment;
          // Cap to prevent unrealistic numbers
          return Math.min(newCount, BASE_COUNT + 500);
        });
        
        // Schedule next increment
        const nextTimeout = scheduleIncrement();
        return () => clearTimeout(nextTimeout);
      }, interval);
    };

    const timeout = scheduleIncrement();
    return () => clearTimeout(timeout);
  }, []);

  // Format with dot separator (Brazilian style)
  const formattedCount = count.toLocaleString('pt-BR');

  return { count, formattedCount };
};
