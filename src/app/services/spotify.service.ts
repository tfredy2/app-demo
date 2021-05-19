import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private _urlApi:string = "https://accounts.spotify.com/authorize";
  private _clientID:string = "b109cad522f34f96aac2ff77f2c79017";
  private _redirectUri:string = encodeURI("http://localhost:4200/");
  private _responseType:string = "code"
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(private _http: HttpClient) { }

  GetLogin():Observable<any> {
    console.log(this._urlApi+'?client_id='+this._clientID+'&response_type='+this._responseType+"&redirect_uri="+this._redirectUri);
    console.log(encodeURI("http://localhost:4200/"))
    console.log(this._http.get(this._urlApi+'?client_id='+this._clientID+'&response_type='+this._responseType+"&redirect_uri="+this._redirectUri));
    return this._http.get(this._urlApi+'?client_id='+this._clientID+'&response_type='+this._responseType+"&redirect_uri="+this._redirectUri);
  }


  
}
