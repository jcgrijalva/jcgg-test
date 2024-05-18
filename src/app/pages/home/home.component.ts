import { Component } from '@angular/core';
import {ConfigurationComponent} from "../configuration/configuration.component";
import {HeaderComponent} from "../header/header.component";
import {NavComponent} from "../nav/nav.component";
import {FormSectionComponent} from "../form-section/form-section.component";
import {ProfileComponent} from "../profile/profile.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ConfigurationComponent,
    HeaderComponent,
    NavComponent,
    FormSectionComponent,
    ProfileComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
