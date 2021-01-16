/* eslint-disable */

import React, {useState, useEffect} from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "./tracker.css";
import {  iconPerson  } from './icons';
import Pattern from "../assets/pattern-bg.png"
import chevron from "../assets/icon-arrow.svg"
import "leaflet/dist/leaflet.css";
function Tracker () {
    // useEffect(()=> {
    //     
    // })
    
    
    
    const [myIp, setIP] = useState("");
    const [ip, setDeets] = useState({});
    const position = [6.5244, 3.3792]
    var url = `https://geo.ipify.org/api/v1?apiKey=at_HVcJmClmOyCk08F8yC6n5aM5eihXj&ipAddress=${myIp}`;
    var inputText = (e)=> {
        var ipAddr = e.target.value;
        setIP(ipAddr);
    }

    async function fetchDetails(event) {
        event.preventDefault();
        var response = await fetch(url);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            alert(message);
        }
        var result = await response.json();
        
        setDeets(result);
        

    }
    return (
        <div className="tracker">
            <div className="tracker-pattern">
                <img src ={Pattern} alt="bg-pattern" className="bg-pattern"></img>
            </div>
            
            <div className="tracker-box">
                <h2> IP Address Tracker </h2>
                {/* <h5> {myIp && myIp} </h5> */}
                <form onSubmit={(e)=> fetchDetails(e) }>
                    <input type="text" placeholder="Search for any IP Address or Domain" onChange={(e)=> inputText(e) }></input>
                    <button className="Search" type="Submit"> 
                        <img src={chevron} className="chevron"></img>
                     </button>
                </form>
                <div className="tracker-result">
                    <div className="ip">
                        <p>IP address</p>
                        <p> {ip.ip && ip.ip}</p>
                    </div>
                    <hr></hr>
                    <div className="location">
                        <p>Location</p>
                        <p> {ip.location && ip.location.region} </p>
                    </div>
                    <hr></hr>
                    <div className="timezone">
                        <p>Timezone</p>
                        <p> {ip.location && ip.location.timezone} </p>
                    </div>
                    <hr></hr>
                    <div className="isp">
                        <p>ISP</p>
                        <p> {ip.isp}</p>
                    </div>
                    
                </div>

            </div>
            
           
            <MapContainer id="mapid" center={position} zoom={30} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={ iconPerson } className="marker">
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                
            </MapContainer>
            

        </div>
    )

}

export default Tracker;