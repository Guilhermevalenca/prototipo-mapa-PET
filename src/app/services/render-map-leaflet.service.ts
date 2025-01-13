import { Injectable } from '@angular/core';
import Leaflet, {Map, MapOptions} from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class RenderMapLeafletService {

  constructor() {}

  public basic(
    element: string | HTMLElement,
    options?: MapOptions,
    ): Map {
    const map: Map = Leaflet.map(element, options)
      .setView([51.505, -0.09], 13);

    Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
    })
      .addTo(map);

    return map;
  }
}
