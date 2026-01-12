import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const leonti_aesthetic = {
  lat: 50.153442186565954,
  lng: 8.806392281536015
};

const placeId = "ChIJM4fyG3URvUcROHzhN0g6bF8";

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
          zoom={16}
          options={mapOptions}
        >
          <MarkerF position={undefined} options={{ placeId }} />
        </GoogleMap>
      ) : (
        <div className="loading">loading map...</div>
      )}
    </div>
  );
};

// React.memo evita renders innecesarios
export default React.memo(MapComponent);