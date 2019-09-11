import React, { Component } from 'react'
import { Map, TileLayer, Marker, CircleMarker, Tooltip, Circle} from 'react-leaflet';
import L from 'leaflet';
// import { Map, TileLayer, Marker, Popup } from 'leaflet'

// type State = {
//     lat: number,
//     lng: number,
//     zoom: number,
// }
L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'

// export default class LeafletMap extends Component<{}, State> {
//     state = {
//         lat: 51.505,
//         lng: -0.09,
//         zoom: 13,
//     }
//
//     render() {
//         const position = [this.state.lat, this.state.lng]
//         return (
//             <Map center={position} zoom={this.state.zoom}>
//                 <TileLayer
//                     attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={position}>
//                     <Popup>
//                         A pretty CSS3 popup. <br /> Easily customizable.
//                     </Popup>
//                 </Marker>
//             </Map>
//         )
//     }
// }

class LeafletMap extends Component {

    markerCluster() {
        let dots = [];
        this.props.Vacatures.forEach((vacature) => {
            let color = "#bdbdbd"; // Grey
            _.forEach(this.props.SelectedVacatures, function(vac){
                if(vacature.id == vac.id) color = "#0b56a3"; // blue
            });

            if((vacature.latitude !== undefined) && (vacature.longitude !== undefined)) {
                dots.push(
                    <CircleMarker
                        key={"m-" + vacature.id}
                        radius={4}
                        fillColor ={color}
                        fillOpacity={1}
                        color={"white"}
                        stroke={true}
                        weight={0.5}
                        center={[vacature.latitude,vacature.longitude]}>
                        <Tooltip>{vacature.name}</Tooltip>
                    </CircleMarker>
                );
            }
        });
        return dots
    }

    render() {
        return (
            <div className="leaflet-map">
                <Map
                    preferCanvas = {true}
                    center = {[51.0795900,4.2009300]}
                    zoom = {8}
                    maxZoom = {16}
                    zoomAnimation = {false}
                    markerZoomAnimation = {false}>
                    <TileLayer
                        url="https://api.mapbox.com/styles/v1/franciscoghz/cjn1th6j8ahe42sminmnusage/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnJhbmNpc2NvZ2h6IiwiYSI6ImNpbnV1Z3J4eTAwb3R2c2tscXgwMWs2eHEifQ.OrlG9so4YihIM4ccw59cHw"/>
                    <Circle
                        center = {{lat: this.props.Coordinates.lat, lng: this.props.Coordinates.lng}}
                        radius = {this.props.JobRadius * 1000}/>
                    <Marker
                        className = "littleHouse"
                        position = {{lat: this.props.Coordinates.lat, lng: this.props.Coordinates.lng}}
                        icon = {locationMarker}/>
                    {this.markerCluster()}
                </Map>
            </div>


        )
    }
}