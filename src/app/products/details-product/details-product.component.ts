import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { Producto } from '../../shared/model/types.model';
import { Location } from '@angular/common'

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  public product: any = {};
  
  constructor(
    private route:ActivatedRoute,
    private data:DataService,
    private location: Location
  ){}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.data.getProductById(productId);
    console.log('product:', this.product);
  }

  onGoBack(): void{
    this.location.back();
  }
}
