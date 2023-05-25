import { Component } from '@angular/core';
import { IconTypes } from './row-header/bordered-icon/icon-types';

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
}
