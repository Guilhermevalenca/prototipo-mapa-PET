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
    setTimeout(() => this.markersWithCustomIcons(), 300);
  }

  private markersWithCustomIcons() {
    const map: Map = this.renderMapLeafletService.basic('map');

    // this.icon(map);
    this.manyIcons(map);
  }

  private icon(map: Map) {
    const greenIcon: Icon = Leaflet.icon({
      iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
      shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

      iconSize:     [38, 95],
      shadowSize:   [50, 64],
      iconAnchor:   [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
    });

    Leaflet.marker([51.5, -0.09], {
      icon: greenIcon
    })
      .addTo(map);
  }

  private iconExtend() {
    return Leaflet.Icon.extend({
      options: {
        shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76],
      },
    });
  }

  private manyIcons(map: Map) {
    const LeafIcon = this.iconExtend();

    //@ts-ignore
    const greenIcon = new LeafIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png'});
    //@ts-ignore
    const redIcon = new LeafIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png'});
    //@ts-ignore
    const orangeIcon = new LeafIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png'});

    Leaflet.marker([51.5, -0.09], {icon: greenIcon})
      .addTo(map)
      .bindPopup("I am a green leaf.");
    Leaflet.marker([51.495, -0.083], {icon: redIcon})
      .addTo(map)
      .bindPopup("I am a red leaf.");
    Leaflet.marker([51.49, -0.1], {icon: orangeIcon})
      .addTo(map)
      .bindPopup("I am an orange leaf.");
  }
}
