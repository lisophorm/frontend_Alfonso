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
        // definitely not what I would do on a live project
        // but let's assume this is just a mock service for prototyping
        this._locationList = data;
        console.log('locations:', this._locationList);
        for (let i = 0; i < this._locationList.length; i++) {
          console.log('loop', i);
          this._postcodes.push(data[i].postcode);
        }
        console.log('postcodes:', this._postcodes);

      }, errpr => {
        console.log('ERROR WITH THIS');
      });
  }
  public search(code): LocationItem {
    console.log('locationservice init');
    return this._locationList.find(item => {
      return item.postcode === code;
    });

  }

}
