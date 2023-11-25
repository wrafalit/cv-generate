import React, { useState, useEffect } from 'react';
import { getInfo } from './client'; // Importuj funkcję getInfo z pliku client.js

const FooterVersion = () => {
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
    // Pobierz informacje o wersji aplikacji po załadowaniu komponentu
    fetchVersionInfo();
  }, []);

  const fetchVersionInfo = async () => {
    try {
      const response = await getInfo(); // Wywołaj funkcję getInfo z client.js
      const data = await response.json();
      setAppVersion(data.version); // Ustaw wersję aplikacji w stanie komponentu
    } catch (error) {
      console.error('There was a problem fetching version info:', error);
    }
  };

  return (
    <footer className="version-footer">
      <p>Wersja aplikacji: <span>{appVersion}</span></p>
    </footer>
  );
};

export default FooterVersion;
