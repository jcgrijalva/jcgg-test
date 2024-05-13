import { Component } from '@angular/core';
import {ProfileComponent} from "../profile/profile.component";

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [
    ProfileComponent
  ],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {

}
