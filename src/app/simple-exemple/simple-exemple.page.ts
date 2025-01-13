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
import Leaflet, {type Icon} from 'leaflet';
import type {
  Marker,
  Circle,
  Polygon,
  Popup,
  Map,
} from 'leaflet';
import {RenderMapLeafletService} from "../services/render-map-leaflet.service";

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
  constructor(private readonly renderMapLeafletService: RenderMapLeafletService) {}

  ngOnInit() {
    setTimeout(() => this.simpleExemple(), 300);
  }

  private simpleExemple() {
    const map: Map = this.renderMapLeafletService.basic('map');

    this.marker(map);
    this.circle(map);
    this.polygon(map);
    this.popup(map);
  }

  private marker(map: Map): Marker {
    return Leaflet.marker([51.5, -0.09], {
      icon: Leaflet.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      })
    })
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
