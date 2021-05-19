import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-excel-example',
  templateUrl: './excel-example.component.html',
  styleUrls: ['./excel-example.component.css']
})
export class ExcelExampleComponent implements OnInit {

  constructor(private _service:SpotifyService) { }

  ngOnInit() {
    console.log(this._service.GetLogin());
  }

}
