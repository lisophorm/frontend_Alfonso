import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocationItem} from '../interfaces/location.interface';
import {weatherItem} from '../interfaces/weather.interface';
import {iconItem} from '../interfaces/iconitem.interface';


@Injectable({
  providedIn: 'root'
})
export class WeatherIconService {

  iconList: Array<iconItem> = [

    {url: '01d.png', description: 'clear sky'},
    {url: '02d.png', description: 'few clouds'},
    {url: '03d.png', description: 'scattered clouds'},
    {url: '04d.png', description: 'broken clouds'},
    {url: '09d.png', description: 'shower rain'},
    {url: '10d.png', description: 'rain'},
    {url: '11d.png', description: 'thunderstorm'},
    {url: '13d.png', description: 'snow'},
    {url: '50d.png', description: 'mist'}
  ];

  constructor() {
  }

  public find(name: string): string {
    console.log('find icon', name);
    const iconUrl = this.iconList.find(item => {
      console.log('comparing', item.description, name)
      return item.description.toLowerCase().indexOf(name.toLowerCase()) > -1;
    }).url;
    console.log('found iconURL', iconUrl);
    return iconUrl;
  }

}






