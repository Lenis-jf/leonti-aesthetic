import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const leonti_aesthetic = {
  lat: 50.15333716631024,
  lng: 8.806611254970692
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
  zoomControlOptions: {
    position: window.google?.maps.ControlPosition.RIGHT_BOTTOM
  }
};

const MapComponent = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  if (loadError) {
    return <div className="map-wrapper">Error loading the map</div>;
  }

  return (
    <div className="map-container">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={leonti_aesthetic}
          zoom={15}
          options={mapOptions}
        >
          <Marker position={leonti_aesthetic} />
        </GoogleMap>
      ) : (
        <div className="loading">loading map...</div>
      )}
    </div>
  );
};

// React.memo evita renders innecesarios
export default React.memo(MapComponent);