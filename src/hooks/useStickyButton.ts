import { useState, useEffect } from 'react';

export function useStickyButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const sc = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h <= 0) return;
      setVisible(sc / h > 0.3);
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return visible;
}
