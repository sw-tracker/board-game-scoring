import { Component } from '@angular/core';
import {
  ScoringCalculationService
} from "src/app/services/scoring-calculation.service";

@Component({
  selector: 'app-flower-points',
  templateUrl: './flower-points.component.html',
  styleUrls: ['./flower-points.component.scss']
})
export class FlowerPointsComponent {
  flowerPoints = this.scoringCalculationService.getFlowerPoints();

  constructor(private readonly scoringCalculationService: ScoringCalculationService) {
  }
}
