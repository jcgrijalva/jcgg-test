import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "./model/user";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private user : User = {username: "",
    hobbies: [],
    birthdate: "",
    document: ""};

  private edad = new BehaviorSubject("Menor");
  getEdad = this.edad.asObservable();

  private modoProfile = new BehaviorSubject("Setting");
  getModoProfile = this.modoProfile.asObservable();

  private imgProfile = new BehaviorSubject("");
  getImgProfile = this.imgProfile.asObservable();

  private userInfo = new BehaviorSubject(this.user);
  getUserInfo = this.userInfo.asObservable();
  constructor() { }

  setEdad(edad:string){
    this.edad.next(edad);
  }

  setModoProfile(modo:string){
    this.modoProfile.next(modo);
  }

  setImgProfile(img:string){
    this.imgProfile.next(img);
  }

  setUserInfo(usr:User){
    this.userInfo.next(usr);
  }

}
