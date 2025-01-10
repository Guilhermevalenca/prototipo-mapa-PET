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
    setTimeout(() => this.simpleExemple(), 300);
  }

  private simpleExemple() {
    const map: Map = Leaflet.map('map')
      .setView([51.505, -0.09], 13);

    Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
    })
      .addTo(map);

    this.marker(map);
    this.circle(map);
    this.polygon(map);
    this.popup(map);
  }

  private marker(map: Map): Marker {
    return Leaflet.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("<b>Hello world!</b><br>I am a popup.")
      .openPopup();
  }

  private circle(map: Map): Circle {
    return Leaflet.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    })
      .addTo(map)
      .bindPopup("I am a circle.");
  }

  private polygon(map: Map): Polygon {
    return Leaflet.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ])
      .addTo(map)
      .bindPopup("I am a polygon.");
  }

  private popup(map: Map): Popup {
    const popup: Popup = Leaflet.popup();

    map.on('click', (e: Leaflet.LeafletMouseEvent) => {
      popup
        .setLatLng(e.latlng)
        .setContent("Você clicou no mapa em " + e.latlng.toString())
        .openOn(map);
    });

    return popup;
  }
}
