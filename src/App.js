import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from './assets/windturbine.png';
import leafRed from './assets/windturbine.png';
import leafOrange from './assets/windturbine.png';


class App extends Component {

  
  
  state = {
    greenIcon: {
      lat: 38.020446,
      lng: 23.177546,
    },
    redIcon: {
      lat: 38.019789,
      lng: 23.134309,
    },
    orangeIcon: {
      lat: 38.015055,
      lng: 23.129986,
    },
    zoom: 13
  }


  grenIcon = L.icon({
    iconUrl: leafGreen,
    
    iconSize:     [50, 64], // size of the icon
    
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    
    popupAnchor:  [-3, -76]
  });

  redIcon = L.icon({
    iconUrl: leafRed,
    
    iconSize:     [50, 64], // size of the icon
    
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    
    popupAnchor:  [-3, -86]
  });

  orangeIcon = L.icon({
    iconUrl: leafOrange,
    
    iconSize:     [50, 64], // size of the icon
    
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    
    popupAnchor:  [-3, -86]
  });
  handleClick = event => {
    const { lat, lng } = event.latlng
    console.log(`Clicked at ${lat}, ${lng}`)
  }

  render(){
    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
    const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];
    return (
      <Map className="map" center={positionGreenIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionGreenIcon} icon={this.grenIcon} onClick={this.handleClick}>
          <Popup>
          Wind Turbine 1
          </Popup>
        </Marker>
        <Marker position={positionRedIcon} icon={this.redIcon} onClick={this.handleClick}>
          <Popup>
          Wind Turbine 2
          </Popup>
        </Marker>
        <Marker position={positionOrangeIcon} icon={this.orangeIcon} onClick={this.handleClick}>
          <Popup>
          Wind Turbine 3
          </Popup>
        </Marker>
      </Map>
      
    );
  }
}

export default App;
