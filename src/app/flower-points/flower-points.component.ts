import { Component } from '@angular/core';
import {
  ScoringCalculationService
} from "src/app/services/scoring-calculation.service";
import {IconTypes} from "src/app/services/round-types";

@Component({
  selector: 'app-flower-points',
  templateUrl: './flower-points.component.html',
  styleUrls: ['./flower-points.component.scss']
})
export class FlowerPointsComponent {
  iconType = IconTypes.FLOWER;
  flowerPoints = this.scoringCalculationService.getFlowerPoints();

  constructor(private readonly scoringCalculationService: ScoringCalculationService) {
  }
}
