import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../model/pokemon";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private pokemonApi = 'https://pokeapi.co/api/v2/'
  constructor(private http: HttpClient) { }

  getPokemon(id:number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.pokemonApi+"pokemon/"+id);
  }
}
