import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
import { Car } from './car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[]

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    return this.carService.getCars().subscribe(result => this.cars = result);
  }

}
