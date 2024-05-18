import { Component } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
    public primaryMessage = "¡Hola! Configuremos tu perfil";
    public secondaryMessage = "Queremos conocerte mejor.";
    modo:string = "";
    constructor(private appService: AppService) {
      this.appService.getModoProfile.subscribe(mod => this.modo = mod);
      if(this.modo == "Profile"){
        this.primaryMessage = "¡Ya casi terminamos!";
        this.secondaryMessage = "Revisa la información y completa lo solicitado."
      }
    }
}
