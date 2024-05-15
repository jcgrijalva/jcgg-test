import { Component } from '@angular/core';
import {ProfileComponent} from "../profile/profile.component";
import {FormSectionComponent} from "../form-section/form-section.component";

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [
    ProfileComponent,
    FormSectionComponent
  ],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {

}
