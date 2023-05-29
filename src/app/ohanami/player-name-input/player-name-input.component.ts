import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-name-input',
  templateUrl: './player-name-input.component.html',
  styleUrls: ['./player-name-input.component.scss']
})
export class PlayerNameInputComponent {
  @Input() playerIndex?: number;
  @Output() readonly nameChange = new EventEmitter<string>();
  nameText: string = '';

  onChange() {
    this.nameChange.emit(this.nameText);
  }
}
