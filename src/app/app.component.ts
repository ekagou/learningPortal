import { Component } from '@angular/core';
import {Globals} from 'src/app/global';
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private globals: Globals, private router: Router) {}
  title = "LearningPortal";

  logout() {
    this.globals.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
}
