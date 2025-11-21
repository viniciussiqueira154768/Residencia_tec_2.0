'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// --- Correção dos ícones (igual ao anterior) ---
const iconFix = () => {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
};

// --- Componente auxiliar para recentralizar o mapa quando a posição mudar ---
function RecenterMap({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 15); // Zoom 15
  }, [lat, lng, map]);
  return null;
}

export default function Map() {
  // Estado para a posição (começa nula ou numa posição padrão segura)
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    iconFix();

    // Pede a localização do navegador
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error("Erro ao obter localização:", err);
          setError("Permissão negada ou erro de localização.");
          // Fallback para Recife se der erro (opcional)
          setPosition([-8.0524, -34.9486]); 
        }
      );
    } else {
      setError("Geolocalização não suportada neste navegador.");
      setPosition([-8.0524, -34.9486]);
    }
  }, []);

  // Mostra mensagem de carregando enquanto busca o GPS
  if (!position) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-500">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mb-2"></div>
        <p>Buscando sua localização...</p>
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
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Componente que força o mapa a ir para a nova posição */}
      <RecenterMap lat={position[0]} lng={position[1]} />

      <Marker position={position}>
        <Popup>
          Você está aqui! <br />
          Latitude: {position[0].toFixed(4)} <br />
          Longitude: {position[1].toFixed(4)}
        </Popup>
      </Marker>
    </MapContainer>
  );
}