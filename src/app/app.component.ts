import {Component, OnInit} from '@angular/core';
import {LocationsService} from '../common/services/locations.service';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {WeatherService} from '../common/services/weather.service';
import {weatherItem} from '../common/interfaces/weather.interface';
import {WeatherIconService} from '../common/services/weather-icon-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'AlfonsoSample';

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  postCodeSelected: string;

  constructor(public locationService: LocationsService,
              public weaterService: WeatherService,
              public weatherIconservice: WeatherIconService) {
    // @ts-ignore
    console.log('hello');
  }

  ngOnInit(): void {
    console.log('hello');
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log('filtervalue', filterValue);
    return this.locationService._postcodes.filter(option => option.toLowerCase().includes(filterValue));
  }

  public searchForItem() {
    console.log('search for item', this.postCodeSelected);

    const itemSelected = this.locationService.search(this.postCodeSelected);

    console.log('found', itemSelected);

  }
}
