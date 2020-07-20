import React from 'react';
import GoogleMap from 'google-map-react';
import './Map.css';

const Map = (props) => {
  let currentCircleObg = {
    lat: '',
    lng: '',
    radius: '',
  };

  return (
    <div className="mapContainer">
      <GoogleMap
        bootstrapURLKeys={{ key: 'AIzaSyAcsAWJRVDJlbmQiQYGSeNhHTZlWaJ1MO4' }}
        defaultZoom={14}
        defaultCenter={{ lat: 32.109333, lng: 34.855499 }}
        onGoogleApiLoaded={({ map, maps }) => {
          // eslint-disable-next-line
          const circle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.3,
            map,
            center: { lat: 32.109333, lng: 34.855499 },
            radius: 400,
            draggable: true,
            editable: true,
          });
          maps.event.addListener(circle, 'drag', () => {
            currentCircleObg.lat = circle.getCenter().lat();
            currentCircleObg.lng = circle.getCenter().lng();
            currentCircleObg.radius = circle.radius;
            console.log(currentCircleObg);
          });
        }}
      />
      <div className="buttonContainer">
        <button
          className="btn btn-primary"
          onClick={() => props.setLocation(currentCircleObg)}
        >
          Add location
        </button>
      </div>
    </div>
  );
};

export default Map;

/*
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // onCircleDragged(event) {}
  //
  // initDraggableCircle({ map, maps }) {
  //   console.log('here');
  //   let circle = new maps.Circle({
  //     strokeColor: '#6D3099',
  //     strokeOpacity: 0.7,
  //     strokeWeight: 1,
  //     fillColor: '#B650FF',
  //     fillOpacity: 0.35,
  //     map: map,
  //     center: { lat: 32.109333, lng: -34.855499 },
  //     radius: 1000,
  //     draggable: true,
  //   });
  //
  //   maps.event.addListener(circle, 'drag', (event) =>
  //     this.onCircleDragged(event)
  //   );
  // }

  render() {
    const mapStyles = {
      width: '50%',
      height: '50%',
    };
    return (
      <div className="Map">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 32.109333, lng: 34.855499 }}
          onGoogleApiLoaded={(map, maps) =>
            this.initDraggableCircle({ map, maps })
          }
          //{this.geofireMarkers()}

          //onGoogleApiLoaded={(map) =>
          //new Circle({
          // center: { lat: 32.109333, lng: 34.855499 },
          // strokeColor: '#FF0000',
          // strokeOpacity: 0.8,
          // strokeWeight: 2,
          // fillColor: '#FF0000',
          // fillOpacity: 0.3,
          // map,
          // radius: 3000,
          //editable: true,
          //})
        />
      </div>
    );
  }
}
*/

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAcsAWJRVDJlbmQiQYGSeNhHTZlWaJ1MO4',
// })(Map);
