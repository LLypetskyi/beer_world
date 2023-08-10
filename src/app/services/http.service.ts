import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IBrew } from '../interfaces/brew';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http: HttpClient) { }

  getBreweries() {
    return this.http.get<IBrew[]>('https://api.openbrewerydb.org/breweries');

  }
}
