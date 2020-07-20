import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './GoogleMap.css';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onCircleDragged(event) {}

  initDraggableCircle({ map, maps }) {
    console.log('here');
    let circle = new maps.Circle({
      strokeColor: '#6D3099',
      strokeOpacity: 0.7,
      strokeWeight: 1,
      fillColor: '#B650FF',
      fillOpacity: 0.35,
      map: map,
      center: { lat: 32.109333, lng: -34.855499 },
      radius: 1000,
      draggable: true,
    });

    maps.event.addListener(circle, 'drag', (event) =>
      this.onCircleDragged(event)
    );
  }

  render() {
    const mapStyles = {
      width: '50%',
      height: '50%',
    };
    return (
      <div className="GoogleMap">
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

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAcsAWJRVDJlbmQiQYGSeNhHTZlWaJ1MO4',
})(GoogleMap);
