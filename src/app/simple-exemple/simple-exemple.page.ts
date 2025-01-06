import {
  Component,
  OnInit,
} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import Leaflet from 'leaflet';
import type {
  Marker,
  Circle,
  Polygon,
  Popup,
  Map,
} from 'leaflet';

@Component({
  selector: 'app-simple-exemple',
  templateUrl: 'simple-exemple.page.html',
  styleUrls: [
    'simple-exemple.page.scss',
  ],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export default class SimpleExemplePage implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      const map: Map = Leaflet.map('map')
        .setView([51.505, -0.09], 13);

      const marker: Marker = Leaflet.marker([51.5, -0.09])
        .addTo(map);

      const circle: Circle = Leaflet.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500,
      })
        .addTo(map);

      const polygon: Polygon = Leaflet.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
      ])
        .addTo(map);

      Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
      })
        .addTo(map);

      marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
      circle.bindPopup("I am a circle.");
      polygon.bindPopup("I am a polygon.");

      const popup: Popup = Leaflet.popup();

      function onMapClick(e: Leaflet.LeafletMouseEvent) {
        popup
          .setLatLng(e.latlng)
          .setContent("Você clicou no mapa em " + e.latlng.toString())
          .openOn(map);
      }

      map.on('click', onMapClick);

    }, 300);
  }
}
