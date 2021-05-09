import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {weatherItem} from "../interfaces/weather.interface";
import {WidgetInterface} from "../interfaces/widget.interface";
import {WeatherIconService} from "../services/weather-icon-service";


@Component({
  selector: 'app-complex-widget',
  templateUrl: './complex-widget.component.html',
  styleUrls: ['./complex-widget.component.css']
})
export class ComplexWidgetComponent implements OnInit, OnChanges {

  @Input() objProps: weatherItem;

  public widgetProps: WidgetInterface = {
    iconFile: '',
    desc: ''
  };

  constructor(public weatherIconService: WeatherIconService) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    // for some reason I had to
    console.log('simple changes', this.objProps)
    this.widgetProps.desc = this.objProps.weather[0].description;
    this.widgetProps.iconFile = 'https://openweathermap.org/img/wn/' + this.weatherIconService.find(this.objProps.weather[0].main);
    console.log('this.widgetProps', this.widgetProps)

  }

}
