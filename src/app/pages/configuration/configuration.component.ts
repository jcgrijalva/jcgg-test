import { Component } from '@angular/core';
import {ProfileComponent} from "../profile/profile.component";
import {FormSectionComponent} from "../form-section/form-section.component";
import {HeaderComponent} from "../header/header.component";
import {NavComponent} from "../nav/nav.component";
import {ItemSerlectorComponent} from "../item-serlector/item-serlector.component";

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [
    ProfileComponent,
    FormSectionComponent,
    HeaderComponent,
    NavComponent,
    ItemSerlectorComponent
  ],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {

}
