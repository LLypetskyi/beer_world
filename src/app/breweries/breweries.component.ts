import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { IBrew } from '../interfaces/brew';


@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {

  brews!: Object;
  // brews!: IBrew[] = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBreweries().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });

  }

}
