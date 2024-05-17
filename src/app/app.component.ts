import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {LoadingComponent} from "./loading/loading.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {NavComponent} from "./nav/nav.component";
import {ProfileComponent} from "./profile/profile.component";
import {HomeComponent} from "./home/home.component";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {ItemSerlectorComponent} from "./item-serlector/item-serlector.component";

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
