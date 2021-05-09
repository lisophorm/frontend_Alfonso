import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocationItem} from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  get locationList(): Array<LocationItem> {
    return this._locationList;
  }

  set locationList(value: Array<LocationItem>) {
    this._locationList = value;
  }

  private _locationList: Array<LocationItem> = [];

  public _postcodes: Array<string> = [];

  constructor(private _http: HttpClient) {
    // this service will handle mock data

    this._http.get('http://localhost:3030/locations')
      .subscribe((data: Array<LocationItem>) => {
        this._locationList = data;
        console.log('locations:', this._locationList);

      }, errpr => {
        console.log('ERROR WITH THIS');
      });
  }


}
