// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup,Tooltip, useMap } from 'react-leaflet';

// const locations = [
//     { lat: 13.0115, lng: 74.7943, name: "NITK" },                        // NITK, Surathkal
//     { lat: 12.9716, lng: 79.1594, name: "VIT" },                         // VIT, Vellore
//     { lat: 13.2357, lng: 74.7421, name: "NITTE" },                       // NITTE, Karkala
//     { lat: 52.4882, lng: -1.8864, name: "Birmingham Institute of Technology" }  // Birmingham Institute of Technology, UK
// ];
// const Zoom = ({ position }) => {
//     const map = useMap();
//     const location=position;
//     const handleClick = () => {
//       map.setView(position, 15); // Set the view to the clicked position with a zoom level of 15
//     };
//     console.log(position)
//         return (
//             <Marker position={position} eventHandlers={{ click: handleClick }}>
//                 <Tooltip>{location.name}</Tooltip>
//                 <Popup>{location.name}</Popup>
//             </Marker>
//         )
//   };

// const LeafletMap = () => {
//   const center = [13.0115, 74.7943]; // Center on NITK

//     return (
//         <div className='flex w-full h-screen items-center justify-center bg-black   '>
//             <div className='w-[80%] h-full flex justify-center items-center'>
//                 <MapContainer center={center} zoom={10} className='w-[80%] h-[50%] '> 
//                     <TileLayer
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     />
//                     {locations.map((location, index) => (
//                         <Zoom key={index} position={location}/>
//                     ))}
//                 </MapContainer>
//             </div>
//         </div>
// );
// };

// export default LeafletMap;

// more functionalities to maps

// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Tooltip, useMapEvents,Popup,useMap } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const collegeLocations = [
//   { lat: 13.0115, lng: 74.7943, name: "NITK" },
//   { lat: 12.9716, lng: 79.1594, name: "VIT" },
//   { lat: 13.2357, lng: 74.7421, name: "NITTE" },
//   { lat: 52.4882, lng: -1.8864, name: "Birmingham Institute of Technology" }
// ];

// // Custom Marker Icons
// const towerIcon = new L.Icon({
//   iconUrl: 'https://imgs.search.brave.com/URswuVwez5hr9u4ttyuLr6A7iR2h8dPYkbYNUHUz0cs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0Lzg5LzY1Lzc0/LzM2MF9GXzQ4OTY1/NzQxOF9nMFJ3bHRS/T2o0clZFRWdveDQ5/dHNKb3d3MXVhQTcy/NS5qcGc', // Tower icon URL
//   iconSize: [25, 41],
//   iconAnchor: [12, 41]
// });

// const customDivIcon = L.divIcon({
//   className: 'custom-div-icon',
//   html: "<div style='background-color:#2A93EE; width:20px; height:20px; border-radius:50%;'></div>"
// });
// const Zoom = ({ position }) => {
//     <ShowRadioTowers/>
//         const map = useMap();
//         const location=position;
//         const handleClick = () => {
//           map.setView(position, 15); // Set the view to the clicked position with a zoom level of 15
//         };
//         // console.log(position)
//             return (
//                 <Marker position={position} eventHandlers={{ click: handleClick }}>
//                     <Tooltip>{location.name}</Tooltip>
//                     <Popup>{location.name}</Popup>
//                 </Marker>
//             )
//       };

// // Component to show/hide radio towers based on zoom level
// const ShowRadioTowers = ({ zoomLevel, college }) => {
//   const [showTowers, setShowTowers] = useState(false);
//   const towers = [
//     { lat: college.lat + 0.001, lng: college.lng + 0.001 },  // Simulated tower positions
//     { lat: college.lat + 0.0015, lng: college.lng + 0.0015 },
//     { lat: college.lat + 0.001, lng: college.lng - 0.001 },
//     { lat: college.lat - 0.0015, lng: college.lng - 0.0015 },
//     { lat: college.lat - 0.001, lng: college.lng + 0.001 }
//   ];

//   // Show towers only if zoom level > 14
//   if (zoomLevel > 14 && !showTowers) {
//     setShowTowers(true);
//   } else if (zoomLevel <= 14 && showTowers) {
//     setShowTowers(false);
//   }

//   return (
//     <>
//       {showTowers &&
//         towers.map((tower, index) => (
//           <Marker key={index} position={[tower.lat, tower.lng]} icon={towerIcon}>
//             <Tooltip>Radio Station {index + 1}</Tooltip>
//           </Marker>
//         ))
//       }
//     </>
//   );
// };

// // Main Map Component
// const LeafletMap = () => {
//   const [zoomLevel, setZoomLevel] = useState(10); // Initial zoom level

//   // Track map zoom and set zoom level in state
//   const MapZoomHandler = () => {
    // useMapEvents({
    //   zoomend: (e) => {
    //     setZoomLevel(e.target._zoom);  // Update zoom level on zoom change
    //   }
    // });
//     return null;
//   };

//   return (
//     <MapContainer center={[13.0115, 74.7943]} zoom={10} style={{ height: "400px", width: "100%" }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; OpenStreetMap contributors'
//       />
//       <MapZoomHandler />
//       {collegeLocations.map((college, index) => (
    //         <Zoom position={college} key={index}/>
    //       ))}
    //     </MapContainer>
    //   );
    // };
    
    // export default LeafletMap;
    
    import React, { useState } from 'react';
    import { MapContainer, TileLayer, Marker, Tooltip, useMap, useMapEvents, Popup } from 'react-leaflet';
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    
    const collegeLocations = [
        { lat: 13.0115, lng: 74.7943, name: "NITK" },
        { lat: 12.9716, lng: 79.1594, name: "VIT" },
        { lat: 13.2357, lng: 74.7421, name: "NITTE" },
        { lat: 52.4882, lng: -1.8864, name: "Birmingham Institute of Technology" }
    ];
    
    // Custom Marker Icons
    const towerIcon = new L.Icon({
        iconUrl: 'https://imgs.search.brave.com/OHi7ZCZk6zTxB-uDNv0Y-DKWWewRCBxdwV49fK22USk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzYwLzI5Lzc5/LzM2MF9GXzY2MDI5/NzkxNV9QcmtpZHgy/STh5OU1pN1NOYUQ1/TmpKWGZOQ1F1NmxV/ci5qcGc', // Tower icon URL
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

const MapZoomHandler = () => {
    useMapEvents({
        zoomend: (e) => {
            setZoomLevel(e.target._zoom);  // Update zoom level on zoom change
        }
    });
    return null;
};

// Component to show/hide radio towers based on zoom level
const ShowRadioTowers = ({ zoomLevel, college }) => {
    const [showTowers, setShowTowers] = useState(false);
    const towers = [
        { lat: college.lat + 0.001, lng: college.lng + 0.001 },  // Simulated tower positions
        { lat: college.lat + 0.0015, lng: college.lng + 0.0015 },
        { lat: college.lat + 0.001, lng: college.lng - 0.001 },
        { lat: college.lat - 0.0015, lng: college.lng - 0.0015 },
        { lat: college.lat - 0.001, lng: college.lng + 0.001 }
    ];
    
    // Show towers only if zoom level > 14
    if (zoomLevel > 14 && !showTowers) {
        setShowTowers(true);
    } else if (zoomLevel <= 14 && showTowers) {
        setShowTowers(false);
    }
    
    return (
        <>
      {showTowers &&
        towers.map((tower, index) => (
            <Marker key={index} position={[tower.lat, tower.lng]} icon={towerIcon}>
            <Tooltip>Radio Station {index + 1}</Tooltip>
          </Marker>
        ))
      }
    </>
  );
};
const OtherComponent=({college})=>{
    
    const [zoomLevel, setZoomLevel] = useState(10); // Initial zoom level
    const map = useMap();
    
    const handleClick = (college) => {
        map.setView([college.lat,college.lng], 15); 
        setZoomLevel(15)
    };
    useMapEvents({
        zoomend: (e) => {
          setZoomLevel(e.target._zoom);  // Update zoom level on zoom change
        }
    });

    return(
        <Marker 
        position={[college.lat, college.lng]} 
        eventHandlers={{
            click: () => handleClick(college)
        }}
    >
    <Tooltip>{college.name}</Tooltip>
    <Popup>{college.name}</Popup>
    <ShowRadioTowers zoomLevel={zoomLevel} college={college} />
    </Marker>
    )
}

// Main Map Component
const LeafletMap = () => {
    const mapCenter=[13.0115, 74.7943]; 


  return (
    <MapContainer center={mapCenter} zoom={10} style={{ height: "700px", width: "100%" }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
        />

        {collegeLocations.map((college, index) => (
            <OtherComponent college={college} key={index}/>
        ))}
        </MapContainer>
  );
};

export default LeafletMap;

