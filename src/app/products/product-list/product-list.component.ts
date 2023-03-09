import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Producto } from '../../shared/model/types.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Producto[] = [];

  constructor(
    private data:DataService
  ){}

  ngOnInit(): void {
    this.products = this.data.getAllProducts();
  }
}
