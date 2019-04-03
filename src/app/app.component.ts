import { Component } from '@angular/core';
import {Globals} from 'src/app/global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private globals: Globals) {
  }
  title = 'LearningPortal';
  
}
