import React from 'react';
import GoogleMap from 'google-map-react';
import './Map.css';

const key = 'AIzaSyD07unc5BD9PVdPj0RUoSA68tNRGB6LNok';

const Map = (props) => {
  let currentCircleObg = {
    lat: '',
    lng: '',
    radius: '',
  };

  let method = props.method;
  return (
    <div className="mapContainer">
      <GoogleMap
        bootstrapURLKeys={{ key: key }}
        defaultZoom={14}
        defaultCenter={
          method !== null
            ? { lat: method.centerLat, lng: method.centerLng }
            : { lat: 32.109333, lng: 34.855499 }
        }
        onGoogleApiLoaded={({ map, maps }) => {
          // eslint-disable-next-line
          const circle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.3,
            map,
            center:
              method !== null
                ? { lat: method.centerLat, lng: method.centerLng }
                : { lat: 32.109333, lng: 34.855499 },
            radius: method !== null ? method.radius : 400,
            draggable: true,
            editable: true,
          });
          maps.event.addListener(circle, 'drag', () => {
            currentCircleObg.lat = circle.getCenter().lat();
            currentCircleObg.lng = circle.getCenter().lng();
            currentCircleObg.radius = circle.radius;
            props.setLocation(currentCircleObg);
          });
        }}
      />
    </div>
  );
};

export default Map;
