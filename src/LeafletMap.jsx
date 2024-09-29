import React from 'react';
import { MapContainer, TileLayer, Marker, Popup,Tooltip, useMap } from 'react-leaflet';

const locations = [
    { lat: 13.0115, lng: 74.7943, name: "NITK" },                        // NITK, Surathkal
    { lat: 12.9716, lng: 79.1594, name: "VIT" },                         // VIT, Vellore
    { lat: 13.2357, lng: 74.7421, name: "NITTE" },                       // NITTE, Karkala
    { lat: 52.4882, lng: -1.8864, name: "Birmingham Institute of Technology" }  // Birmingham Institute of Technology, UK
];
const Zoom = ({ position }) => {
    const map = useMap();
    
    const handleClick = () => {
      map.setView(position, 15); // Set the view to the clicked position with a zoom level of 15
    };
  
        return (
            <Marker position={position} eventHandlers={{ click: handleClick }}>
                <Tooltip>{position.name}</Tooltip>
                <Popup>{location.name}</Popup>
            </Marker>
        )
  };

const LeafletMap = () => {
  const center = [13.0115, 74.7943]; // Center on NITK

    return (
        <div className='flex w-full h-screen items-center justify-center bg-black   '>
            <div className='w-[80%] h-full flex justify-center items-center'>
                <MapContainer center={center} zoom={10} className='w-[80%] h-[50%] '> 
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {locations.map((location, index) => (
                        <Zoom key={index} position={[location.lat, location.lng]}/>
                    ))}
                </MapContainer>
            </div>
        </div>
);
};

export default LeafletMap;
