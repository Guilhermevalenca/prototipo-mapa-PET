import {Component, OnInit} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import Leaflet from "leaflet";
import type {Icon, Map} from 'leaflet';
import {RenderMapLeafletService} from "../services/render-map-leaflet.service";

@Component({
  selector: 'app-custom-icon',
  templateUrl: 'custom-icon.page.html',
  styleUrls: ['custom-icon.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export default class CustomIconPage implements OnInit {
  private readonly renderMapLeafletService: RenderMapLeafletService = new RenderMapLeafletService();
  constructor() {}

  ngOnInit() {
    setTimeout(this.markersWithCustomIcons, 300);
  }

  private markersWithCustomIcons() {
    const map: Map = this.renderMapLeafletService.basic('map');

    this.icon(map);
  }

  private icon(map: Map) {
    const greenIcon: Icon = Leaflet.icon({
      iconUrl: 'leaf-green.png',
      shadowUrl: 'leaf-shadow.png',

      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    Leaflet.marker([51.5, -0.09], {
      icon: greenIcon
    })
      .addTo(map);
  }
}
