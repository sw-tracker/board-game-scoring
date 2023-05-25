import { Component } from '@angular/core';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ohanami-scoring';
  faDroplet = faDroplet;
}
