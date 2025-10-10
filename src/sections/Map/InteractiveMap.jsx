'use client';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import { useState } from 'react';
import { createCustomIcon, getCoordinatesFromEvent, formatCoordinates, isInUkraine } from './MapUtils';

// Исправление для иконок Leaflet в Next.js
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Компонент для обработки кликов по карте
function MapClickHandler({ onMapClick, allowAddingMarkers }) {
  useMapEvents({
    click: (e) => {
      if (allowAddingMarkers) {
        const coords = getCoordinatesFromEvent(e);
        onMapClick(coords);
      }
    },
  });
  return null;
}

// Пример данных с метками
const initialMarkers = [
  {
    id: 1,
    position: [50.4501, 30.5234],
    title: 'Киев',
    description: 'Главный офис в Киеве',
    type: 'office',
    color: '#007bff'
  },
  {
    id: 2,
    position: [49.9935, 36.2304],
    title: 'Харьков',
    description: 'Представительство в Харькове',
    type: 'branch',
    color: '#28a745'
  },
  {
    id: 3,
    position: [46.4825, 30.7233],
    title: 'Одесса',
    description: 'Представительство в Одессе',
    type: 'branch',
    color: '#28a745'
  }
];

export default function InteractiveMap({ 
  allowAddingMarkers = false, 
  onMarkerAdd = null,
  customMarkers = null 
}) {
  const [markers, setMarkers] = useState(initialMarkers);
  const [nextId, setNextId] = useState(4);

  const currentMarkers = customMarkers || markers;

  const handleMapClick = (coords) => {
    if (!allowAddingMarkers) return;

    const [lat, lng] = coords;
    
    if (!isInUkraine(lat, lng)) {
      alert('Пожалуйста, выберите точку в пределах Украины');
      return;
    }

    const newMarker = {
      id: nextId,
      position: coords,
      title: `Новая метка ${nextId}`,
      description: `Координаты: ${formatCoordinates(lat, lng)}`,
      type: 'custom',
      color: '#ffc107'
    };

    setMarkers(prev => [...prev, newMarker]);
    setNextId(prev => prev + 1);

    if (onMarkerAdd) {
      onMarkerAdd(newMarker);
    }
  };

  const getMarkerIcon = (marker) => {
    return createCustomIcon([32, 32]);
  };

  return (
    <div className={styles.map}>
      <div className={styles.content}>
        {allowAddingMarkers && (
          <div className={styles.mapControls}>
            <div className={styles.instruction}>
              Кликните по карте, чтобы добавить новую метку
            </div>
          </div>
        )}
        
        <MapContainer
          center={[49.9935, 36.2304]}
          zoom={6}
          className={styles.mapContainer}
        >
          <MapClickHandler 
            onMapClick={handleMapClick} 
            allowAddingMarkers={allowAddingMarkers}
          />
          
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {currentMarkers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              icon={getMarkerIcon(marker)}
            >
              <Popup>
                <div className={styles.popup}>
                  <h3>{marker.title}</h3>
                  <p>{marker.description}</p>
                  {marker.type === 'custom' && (
                    <div className={styles.coordinates}>
                      Координаты: {formatCoordinates(marker.position[0], marker.position[1])}
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
