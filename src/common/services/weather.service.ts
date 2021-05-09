import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocationItem} from '../interfaces/location.interface';
import {weatherItem} from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  get weatherLocations(): Array<weatherItem> {
    return this._weatherLocations;
  }

  set weatherLocations(value: Array<weatherItem>) {
    this._weatherLocations = value;
  }

  private _weatherLocations: Array<weatherItem> = [];

  constructor(private _http: HttpClient) {
    this._http.get(' http://localhost:3030/weather')
      .subscribe((data: Array<weatherItem>) => {
        //  let's assume this is just a mock service for prototyping
        this._weatherLocations = data;
        console.log('weather:', this._weatherLocations);

      }, errpr => {
        console.log('ERROR WITH THIS');
      });
  }

  // brutal function that returns the closest item

  public closest(lat, long): weatherItem {
    let closestItem: number = 0;
    let closestItemPointer: number = 0;
    for (let i = 0; i < this._weatherLocations.length; i++) {
      let distance = this.calcCrow(lat, long, this._weatherLocations[i].coord.lat, this._weatherLocations[i].coord.lon);
      if (i == 0) {
        closestItem = distance;
      } else {
        if (distance < closestItem) {
          closestItem = distance;
          closestItemPointer = i;
        }
      }
      console.log('distance', distance);
    }
    console.log('closestitem', closestItem);
    return this._weatherLocations[closestItemPointer];
  }

  // taken from good ol StackOverflow

  private calcCrow(lat1, lon1, lat2, lon2) {
    let R = 6371; // km
    let dLat = this.toRad(lat2 - lat1);
    let dLon = this.toRad(lon2 - lon1);
    lat1 = this.toRad(lat1);
    lat2 = this.toRad(lat2);

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return d;
  }

  private toRad(Value) {
    return Value * Math.PI / 180;
  }

}
