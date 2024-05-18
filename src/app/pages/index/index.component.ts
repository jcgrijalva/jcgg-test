import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {AppService} from "../../app.service";
import {Router} from "@angular/router";
import {ConfigurationComponent} from "../configuration/configuration.component";
import {ItemSerlectorComponent} from "../item-serlector/item-serlector.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    MatButton,
    ConfigurationComponent,
    ItemSerlectorComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  edad : string = '';

  constructor(private appService : AppService, private router: Router) {
    this.appService.getEdad.subscribe(ed => this.edad = ed);
  }

  goToConfFull(){
    this.appService.setEdad("Mayor");
    console.log(this.edad);
    this.router.navigate([`/home`]);
  }

  goToConfLimited(){
    this.appService.setEdad("Menor");

    console.log(this.edad);
    this.router.navigate([`/home`]);
  }
}
