import {Component} from '@angular/core';
import {WeatherIconService} from "../common/services/weather-icon-service";
import {WeatherService} from "../common/services/weather.service";
import {LocationsService} from "../common/services/locations.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AlfonsoSample';

  constructor(public locationService: LocationsService,
              public weaterService: WeatherService,
              public weatherIconservice: WeatherIconService) {
    // @ts-ignore
    console.log('hello');
  }


}
