import { useState, useEffect } from 'react';

const TIMER_KEY = 'xaveco_timer_end';
const TIMER_DURATION_SEC = 15 * 60; // 15 minutes

export function useTimer() {
  const [timeText, setTimeText] = useState('15:00');
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    function getEnd() {
      try {
        const saved = localStorage.getItem(TIMER_KEY);
        if (saved) {
          const n = Number(saved);
          if (!isNaN(n)) return n;
        }
      } catch (e) {}
      const end = Date.now() + TIMER_DURATION_SEC * 1000;
      try {
        localStorage.setItem(TIMER_KEY, String(end));
      } catch (e) {}
      return end;
    }

    const end = getEnd();

    const tick = () => {
      const rem = end - Date.now();
      if (rem <= 0) {
        setTimeText('00:00');
        setEnded(true);
        return;
      }
      const s = Math.max(0, Math.floor(rem / 1000));
      const m = Math.floor(s / 60);
      const ss = s % 60;
      setTimeText(
        String(m).padStart(2, '0') + ':' + String(ss).padStart(2, '0')
      );
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return { timeText, ended };
}
