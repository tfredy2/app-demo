import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private _urlApi:string = "https://accounts.spotify.com/authorize";
  private _clientID:string = "b109cad522f34f96aac2ff77f2c79017";
  private _redirectUri:string = "http://localhost:4200/album";
  private _scopes:string =""; 
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor() { }
  public getLogin():string{
    return (this._urlApi +'?client_id='+this._clientID+'&response_type=code' + '&redirect_uri=' + encodeURIComponent(this._redirectUri)+'&state=34fFs29kd09&scope=user-read-private%20user-read-email')
    // http://localhost:4200/album?code=AQB9pLIIWLwPevRGyyV_YTiKXk-kcRkNg202q9l3XCdsd-oUtwk7IPhhmDMCYNTz_ek1Nd5xMXuk83EKrv08dE_CI2MsrY-G8glt0TY2MXGZBrOXJY054U3e-SUNPrKax5kvRMM4LZeOYdvQ7kTvte_FREUyVbftbbTeqSEYfDcqzeylJdWHg_NlHDng1lDUwvYxxVRaQlt08TI-UFQPH1uBlQ
    // http://localhost:4200/album?code=AQCp6l4uEYL3CyfaLYaTDdpHNMLyFLJ6UeMV6YSIC96tQmGk2SqHivyJie3_5hLHwEQiXnmTUznYUw18ApZ2IcW_8vfdXsxx5I-3WU0iWtQtJtFdIY7W_JtdMNPDPHAzj6HUewqi1oPYIchtfxu0gCEDkZ-_vDblYAWkI-bzd3vl6o90oTWDWGXqAMBe2872m3q1P2tSyJTJ8J3oqSwZxrXy3w&state=
    // http://localhost:4200/album?code=AQBInthRwQw4c_IHZEV3M90ScSWd3gs21ecDUvl6AztOFc_DSCZf7UGrJTrLnshDyx2KvmpS6xhrdk0X-5CtdAWy8pD9n_d49NcfqKTq6D9cpqWPV_k81je50SiALO7NaKKI9ettsppy4MCRilBAVGAODFp8HMZrhKRnswNnIIlThLz1NrMupGAGQ8zlTgKjHcBO9u_qhhwfGvPLHnuXC4DaLw&state=34fFs29kd09
  }


  

}
