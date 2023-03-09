import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './model/types.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private products = [
    {id: 1, name:'egg', category:'Food',description:'Lorem egg', price: 1},
    {id: 2, name:'Coca cola', category:'Drink',description:'Lorem drink', price: 3},
    {id: 3, name:'Inka Cola', category:'Drink',description:'Lorem drink', price: 4}
  ];

  getAllProducts(){
    return this.products;
  }

  getProductById(id:any){
    return this.products.filter((product) => product.id == id);
  }
}
