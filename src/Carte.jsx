import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react';
import style from './style.css';

const Carte = () => {
    const [center, setCenter] = useState([45.7462733, 4.8221678]);

    return (
        <div>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                className={style.mapContainer}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Carte;