import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})

// clasa serviciu pentru a face requesturi catre backend
export class CarsService {

// injectam serviciul de http care vine cu angular
  constructor(private http: HttpClient) { }

// metoda in care folosim o metoda din serviciul http pentru a apela ruta din backend
  getCars() {
    return this.http.get<Car[]>('http://localhost:8080/cars');
  }
}
