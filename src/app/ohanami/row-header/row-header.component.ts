import { Component, Input, OnInit } from '@angular/core';
import { IconTypes } from '../services/round-types';

@Component({
  selector: 'app-row-header',
  templateUrl: './row-header.component.html',
  styleUrls: ['./row-header.component.scss']
})
export class RowHeaderComponent implements OnInit {
  @Input() roundNumber?: number;
  @Input() multiplier?: number;
  @Input() iconType?: IconTypes;

  ngOnInit() {
  }
}
