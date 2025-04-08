import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapSection({ locations }) {
  return (
    <div className="h-96 leading-12">
        <p className="text-2xl font-semibold">Interactive Map</p>
        <p className="text-[#a9a3c3]">Get an Interactive, playful and visually appealing map that helps you navigate the noise</p>
      <MapContainer
        center={[65, 10]}
        zoom={5}
        scrollWheelZoom={false} 
        zoomControl={false}
        className="h-full w-full rounded shadow"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              <strong>{loc.title}</strong>
              <br />
              {loc.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}