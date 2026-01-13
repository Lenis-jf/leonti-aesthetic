import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const leonti_aesthetic = {
  lat: 50.15333870842466,
  lng: 8.806434387053411
};

// 50.15334472609511, 8.806442166002721
// 50.15333870842466, 8.806434387053411

// const placeId = "ChIJM4fyG3URvUcROHzhN0g6bF8";

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
          zoom={18}
          options={mapOptions}
        >
          <MarkerF position={leonti_aesthetic} title='Kosmetikstudio Leonti Aesthetic' />
        </GoogleMap>
      ) : (
        <div className="loading">loading map...</div>
      )}
    </div>
  );
};

// React.memo evita renders innecesarios
export default React.memo(MapComponent);