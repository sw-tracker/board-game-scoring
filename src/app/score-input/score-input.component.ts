import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.scss']
})
export class ScoreInputComponent {
  @Input() scoreValue?: number;
  @Input() isReadonly = false;
  @Output() readonly scoreChange = new EventEmitter<number | undefined>();

  scoreInput?: number = undefined;

  onChange() {
    this.scoreChange.emit(this.scoreInput);
  }
}
