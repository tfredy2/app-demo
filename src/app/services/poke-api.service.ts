import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private UrlPrincipal:string = 'https://pokeapi.co/api/v2/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(private _http:HttpClient) { }

  public getPokemon(pokemon:string):Observable<any> {
    return this._http.get<any>(this.UrlPrincipal+'pokemon/'+pokemon,this.httpOptions)
  }

}
