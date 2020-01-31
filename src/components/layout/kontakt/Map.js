import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

const Map = () => {
  console.log("radi");

  const map = () => {
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 49.5614, lng: 11.0044 }}
        options={{ gestureHandling: "greedy" }}
      >
        <Marker position={{ lat: 49.5614, lng: 11.0044 }} />
      </GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(map));
  return (
    <div className="kontakt__mapcontainer">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDEPkQvhTNGmJPJ5f4YHzhouvVyYtIdr7M`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default Map;
