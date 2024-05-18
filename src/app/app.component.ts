import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./pages/header/header.component";
import {LoadingComponent} from "./pages/loading/loading.component";
import {ConfigurationComponent} from "./pages/configuration/configuration.component";
import {NavComponent} from "./pages/nav/nav.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {HomeComponent} from "./pages/home/home.component";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {ItemSerlectorComponent} from "./pages/item-serlector/item-serlector.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoadingComponent, ConfigurationComponent, NavComponent, ProfileComponent, HomeComponent, MatButton, ItemSerlectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jcgg-test';

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/index']);
    }, 1000);
  }

}
