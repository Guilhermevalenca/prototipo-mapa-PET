import {Component, OnInit} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-custom-icon',
  templateUrl: 'custom-icon.page.html',
  styleUrls: ['custom-icon.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export default class CustomIconPage implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(this.markersWithCustomIcons, 300);
  }

  private markersWithCustomIcons() {

  }
}
