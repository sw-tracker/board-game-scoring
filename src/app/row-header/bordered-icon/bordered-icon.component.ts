import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faCloud, faSeedling, faQuestion, faFan } from '@fortawesome/free-solid-svg-icons';
import { IconTypes } from 'src/app/services/round-types';

@Component({
  selector: 'app-bordered-icon',
  templateUrl: './bordered-icon.component.html',
  styleUrls: ['./bordered-icon.component.scss']
})
export class BorderedIconComponent implements OnInit {
  @Input() iconType?: IconTypes;
  displayIcon = faQuestion;
  displayClass = '';

  ngOnInit() {
    switch (this.iconType) {
      case IconTypes.CLOUD:
        this.displayIcon = faCloud;
        this.displayClass = 'grey-cloud';
        break;
      case IconTypes.LEAF:
        this.displayIcon = faSeedling;
        this.displayClass = 'green-leaf';
        break;
      case IconTypes.DROPLET:
        this.displayIcon = faDroplet;
        this.displayClass = 'blue-droplet';
        break;
      case IconTypes.FLOWER:
        this.displayIcon = faFan;
        this.displayClass = 'pink-flower';
        break;
    }
  }
}
