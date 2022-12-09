import { useEffect, useState } from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { moonOutline, sunnyOutline } from 'ionicons/icons';

const key = 'is-dark';
const isDarkMode = localStorage.getItem(key);

export const ThemeSwitcher = () => {
  const [enabled, setEnabled] = useState(isDarkMode ? JSON.parse(isDarkMode) : true);

  useEffect(() => {
    if (!isDarkMode) {
      setEnabled(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(enabled));
    document.body.classList.toggle('dark', enabled);
  }, [enabled]);

  return (
    <IonButton onClick={() => setEnabled(i => !i)}>
      <IonIcon icon={enabled ? sunnyOutline : moonOutline} />
    </IonButton>
  );
};
