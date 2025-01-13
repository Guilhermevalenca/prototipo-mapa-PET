import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import * as Leaflet from 'leaflet';
import type { Map, Marker, Circle } from 'leaflet';
import {RenderMapLeafletService} from "../services/render-map-leaflet.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export default class Tab2Page implements OnInit {
  constructor(private readonly renderMapLeafletService: RenderMapLeafletService) {}

  ngOnInit() {
    setTimeout(() => {
      const map: Map = this.renderMapLeafletService.basic('map');

      map.locate({ setView: true, maxZoom: 16 });

      map.on('locationfound', (e: Leaflet.LocationEvent) => {
        const radius = e.accuracy;

        const marker: Marker = Leaflet.marker(e.latlng, {alt: 'Igarassu'}).addTo(map).bindPopup('Essa é sua Localização atual!! Esse é um exemplo de acessibilidade que o Leaflet permite.');
        const circle: Circle = Leaflet.circle(e.latlng, {
          radius,
        }).addTo(map);

      });

      map.on('locationerror', (e: Leaflet.ErrorEvent) => {
        alert(`Erro ao obter localização: ${e.message}`);
      });

    }, 300);
  }
}

