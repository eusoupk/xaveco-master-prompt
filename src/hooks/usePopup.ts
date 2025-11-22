import { useState, useEffect } from 'react';

const POPUP_KEY = 'xaveco_popup_closed_at';
const POPUP_DELAY = 1500;

export function usePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function shouldShow() {
      try {
        const ts = localStorage.getItem(POPUP_KEY);
        if (!ts) return true;
        const then = Number(ts);
        if (isNaN(then)) return true;
        return Date.now() - then > 24 * 60 * 60 * 1000; // 24h
      } catch (e) {
        return true;
      }
    }

    if (shouldShow()) {
      const t = setTimeout(() => setVisible(true), POPUP_DELAY);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setVisible(false);
    try {
      localStorage.setItem(POPUP_KEY, String(Date.now()));
    } catch (e) {}
  };

  return { visible, close };
}
