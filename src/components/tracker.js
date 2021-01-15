import React, {useState, useEffect} from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./tracker.css";

import Pattern from "../assets/pattern-bg.png"
import chevron from "../assets/icon-arrow.svg"

function Tracker () {
    // useEffect(()=> {
    //     
    // })
    const position = [51.505, -0.09]
    return (
        <div className="tracker">
            <div className="tracker-pattern">
                <img src ={Pattern} alt="bg-pattern" className="bg-pattern"></img>
            </div>
            
            <div className="tracker-box">
                <h2> IP Address Tracker </h2>
                <form>
                    <input type="text" placeholder="Search for any IP Address or Domain"></input>
                    <button className="Search" type="Submit"> 
                        <img src={chevron} className="chevron"></img>
                     </button>
                </form>
                <div className="tracker-result">
                    <div className="ip">
                        <p>IP address</p>
                        <p> 192.168.1.100</p>
                    </div>
                    <hr></hr>
                    <div className="location">
                        <p>Location</p>
                        <p> Kingston </p>
                    </div>
                    <hr></hr>
                    <div className="timezone">
                        <p>Timezone</p>
                        <p> UTC 8:00 </p>
                    </div>
                    <hr></hr>
                    <div className="isp">
                        <p>ISP</p>
                        <p> Musk </p>
                    </div>
                    
                </div>

            </div>
            
           
            <MapContainer id="mapid" center={position} zoom={80} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
                
            </MapContainer>
            

        </div>
    )

}

export default Tracker;