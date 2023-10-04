import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = ({ markers }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Initial center latitude and longitude
      zoom={13} // Initial zoom level
      style={{ width: "100%", height: "400px" }} // Set the map container size
    >
      {/* Add a tile layer (you can replace the URL with your preferred map provider) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Render markers from the 'markers' prop */}
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.latitude, marker.longitude]}
        >
          {/* Add a popup for each marker */}
          <Popup>
            <div>
              <h3>{marker.title}</h3>
              <p>{marker.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
