import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, Marker } from 'react-google-maps';
import { geolocated, geoPropTypes } from 'react-geolocated';
import MarkerWithInfo from './MarkerWithInfo.presentation';

class MapView extends Component {
  render() {
    const { adventures, coords, isGeolocationAvailable, isGeolocationEnabled } = this.props;
    const currentLocationIcon = {
      path: 'M-6,0a6,6 0 6,0 12,0a6,6 0 1,0 -12,0',
      fillColor: '#4285f4',
      fillOpacity: 1,
      scale: 1,
      strokeColor: '#4285f4',
      strokeWeight: 11,
      strokeOpacity: 0.2
    };
    let geolocation = (isGeolocationAvailable && isGeolocationEnabled);

    return (
      <div>
        <div className="MapWrapper">
          <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 45.908611, lng: -66.586770 }} >
            {(geolocation && coords) &&
              <Marker
                position={{
                  lat: this.props.coords.latitude,
                  lng: this.props.coords.longitude
                }}
                icon= {currentLocationIcon}
              />
            }
            {adventures.map((adventure) => {
              let location = adventure.location;

              if (location && location.latitude && location.longitude) {
                return (
                  <MarkerWithInfo
                    key={adventure.id}
                    adventure={adventure} />
                );
              }
            })}
          </GoogleMap>
        </div>
      </div>


    );
  }
}

MapView.propTypes = {
  adventures: PropTypes.array.isRequired,
  coords: {...MapView.propTypes, ...geoPropTypes}
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(MapView);
