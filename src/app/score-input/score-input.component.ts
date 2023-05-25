import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.scss']
})
export class ScoreInputComponent {
  @Input() isReadonly = false;
}
