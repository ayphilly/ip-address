import L from 'leaflet';
import Icon from "../assets/icon-location.svg"
const iconPerson = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(35, 46),
    className: 'leaflet-div-icon'
});

export { iconPerson };