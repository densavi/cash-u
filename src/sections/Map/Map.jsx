import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import styles from './Map.module.css';

// Динамический импорт компонента карты только на клиенте
const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className={styles.map}>
      <div className={styles.content}>
        <div className={styles.loading}>Загрузка карты...</div>
      </div>
    </div>
  )
});

export default function Map({ allowAddingMarkers = false, onMarkerAdd = null, customMarkers = null }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={styles.map}>
        <div className={styles.content}>
          <div className={styles.loading}>Загрузка карты...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.mapSearch}>
        <input type="search" placeholder="Введіть адресу" />
        <button className={styles.mapSearchButton}>
          <img src="/images/MagnifyingGlass.svg" alt="search" />
        </button>
      </div>
      <InteractiveMap 
        allowAddingMarkers={allowAddingMarkers}
        onMarkerAdd={onMarkerAdd}
        customMarkers={customMarkers}
      />
    </div>
  );
}
