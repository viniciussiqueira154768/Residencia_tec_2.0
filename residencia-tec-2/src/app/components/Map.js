'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';


const iconFix = () => {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
};


function LocationHandler({ lat, lng }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView([lat, lng], 15);
  }, [lat, lng, map]);

  return null;
}


export default function Map({ onPositionChange }) {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    iconFix();

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const newPos = [latitude, longitude];
          
          setPosition(newPos);

          
          if (onPositionChange) {
            onPositionChange(latitude, longitude);
          }
        },
        (err) => {
          console.error(err);
          setError("Erro ao obter localização.");
          
          const fallback = [-8.0524, -34.9486];
          setPosition(fallback);
          if (onPositionChange) onPositionChange(fallback[0], fallback[1]);
        }
      );
    } else {
      const fallback = [-8.0524, -34.9486];
      setPosition(fallback);
      if (onPositionChange) onPositionChange(fallback[0], fallback[1]);
    }
  }, [onPositionChange]); 
  
  if (!position) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-500">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mb-2"></div>
        <p>Localizando GPS...</p>
      </div>
    );
  }

  return (
    <MapContainer 
      center={position} 
      zoom={15} 
      scrollWheelZoom={true} 
      className="h-full w-full z-0"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <LocationHandler lat={position[0]} lng={position[1]} />

      <Marker position={position}>
        <Popup>Sua localização atual</Popup>
      </Marker>
    </MapContainer>
  );
}