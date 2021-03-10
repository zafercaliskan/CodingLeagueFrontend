import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
//import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  dataLoaded = false;
  products: Product[] = [];
  apiUrl = "https://localhost:44314/api/products/getall";

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log('Init çalıştı');
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
      this.dataLoaded = true;
    })
  }
}