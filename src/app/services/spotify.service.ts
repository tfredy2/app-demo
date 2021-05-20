import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private _urlApi:string = "https://accounts.spotify.com";
  private _clientID:string = "b109cad522f34f96aac2ff77f2c79017";
  private _redirectUri:string = "http://localhost:4200/album";
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor() { }
  public getLogin():string{
    return (this._urlApi +'/authorize?client_id='+this._clientID+'&response_type=token' + '&redirect_uri=' + encodeURIComponent(this._redirectUri))
  }


  

}
