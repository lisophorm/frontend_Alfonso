import {Component, Input, OnInit} from '@angular/core';
import {weatherItem} from "../interfaces/weather.interface";



@Component({
  selector: 'app-complex-widget',
  templateUrl: './complex-widget.component.html',
  styleUrls: ['./complex-widget.component.css']
})
export class ComplexWidgetComponent implements OnInit {

  @Input() objProps: weatherItem;

  constructor() {
  }

  ngOnInit(): void {

  }

}
