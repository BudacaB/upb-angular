import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
import { Car } from './car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

// propritatea de tip array de Car din clasa componentului nostru cars.component
  cars: Car[]

// injectam in constructor serviciul creat de noi
  constructor(private carService: CarsService) { }

// ngOnInit este un 'lifecycle hook' angular si ruleaza cand se creeaza componentul, apeleaza metoda noastra pentru
// a popula variabila cars
  ngOnInit() {
    this.getCars();
  }

// facem o metoda pentru a folosi serviciul creat de noi si pentru a trimite rezultatul in variabila 'cars'
// subscriem la raspuns pentru ca este de tip Observable (sau obiect Promisiune) fiind un request async si stim
// primi raspunsul la un punct, dar trecem mai departe in cod
  getCars() {
    return this.carService.getCars().subscribe(result => this.cars = result);
  }

}
