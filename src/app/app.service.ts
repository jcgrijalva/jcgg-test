import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private edad = new BehaviorSubject("menor");
  getEdad = this.edad.asObservable();
  constructor() { }

  setEdad(edad:string){
    this.edad.next(edad);
  }
}
