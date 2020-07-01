import React, { useRef, useState, useEffect, useMemo } from 'react';
import {
  LoadScript,
  GoogleMap,
  DirectionsRenderer,
  DirectionsService,
} from '@react-google-maps/api';

const mapContainerStyle = {
  height: '70vh',
  width: '100%',
};

const DirectionsAsAService = ({ destination, origin, callback }) => {
  return useMemo(
    <DirectionsService
      options={{
        destination: destination,
        origin: origin,
        travelMode: 'DRIVING',
      }}
      callback={callback}
    />
  );
};

// const DirectionsServiceMemo = React.useMemo(DirectionsAsAService);

const Directions = (props) => {
  const [directions, setDirections] = useState();
  const { origin, destination } = props;
  const waypoints = useRef({ origin, destination });
  const count = useRef(0);

  const options = {
    polylineOptions: {
      strokeColor: '#40c0a3',
      strokeWeight: 6,
      strokeOpacity: 0.8,
    },
  };

  // useEffect(() => {
  //   count.current = 0;
  // }, [origin, destination]);

  const directionsCallback = React.useCallback(function (result, status) {
    if (status === 'OK' && count.current === 0) {
      count.current++;
      setDirections(result);
    }
  }, []);

  return (
    <>
      <DirectionsService
        options={{
          destination,
          origin,
          travelMode: 'DRIVING',
        }}
        callback={directionsCallback}
      />
      {
        directions &&
          // <DirectionsRenderer directions={directions} options={options} />
          console.log(directions)
        //
      }
    </>
  );
};

const Map04 = () => {
  const [position, setPosition] = useState({
    lat: 52.52047739093263,
    lng: 13.36653284549709,
  });

  const origin = { lng: 13.36653284549709, lat: 52.52047739093263 };
  const destination = { lat: 53.3242381, lng: -6.3857848 };

  const [directions, setDirections] = useState();
  const mapRef = useRef(null);
  const count = useRef(0);
  const [zoom, setZoom] = useState(4);
  const handleMapLoaded = (map) => {
    mapRef.current = map;
  };
  const onChangeCenter = () => {
    if (!mapRef.current) return;
    const newPos = mapRef.current.getCenter().toJSON();
    console.log(newPos);
    setPosition(newPos);
  };
  const onChangeZoom = () => {
    if (!mapRef.current) return;
    const currentZoom = mapRef.current.getZoom();
    setZoom(currentZoom);
    //console.log(currentZoom);
  };

  const directionsCallback = React.useCallback(function (result, status) {
    if (status === 'OK' && count.current === 0) {
      count.current++;
      setDirections(result);
    }
  }, []);

  return (
    <div>
      <LoadScript
        id='script-loader'
        googleMapsApiKey=''
        language='en'
        region='us'
      >
        <GoogleMap
          onLoad={handleMapLoaded}
          onCenterChanged={onChangeCenter}
          onZoomChanged={onChangeZoom}
          mapContainerStyle={mapContainerStyle}
          center={position}
          zoom={4}
        >
          <Directions origin={origin} destination={destination} />

          {/* <DirectionsAsAService
            destination={destination}
            origin={origin}
            callback={directionsCallback}
          /> */}

          {/* {
            directions &&
              // <DirectionsRenderer directions={directions} options={options} />
              console.log(directions)
            //
          } */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default Map04;
