import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/configuration']);
    }, 2000); // Redirecciona después de 2 segundos
  }
}
