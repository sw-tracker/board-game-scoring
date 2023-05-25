import { Component } from '@angular/core';
import { IconTypes, roundsConfig } from './services/round-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  iconTypeWanted = IconTypes.DROPLET;
  iconTypeWanted1 = IconTypes.CLOUD;
  iconTypeWanted2 = IconTypes.LEAF;
  iconTypeWanted3 = IconTypes.FLOWER;
  roundsConfig = roundsConfig;
}
