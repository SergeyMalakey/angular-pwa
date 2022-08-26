import { Component, OnInit } from '@angular/core';
import {IntProduct} from "../../modules/products";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  title = 'test-ng-app';
  loading = false
  term=''
  products: IntProduct[] = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loading = true

    this.productsService.getAll().subscribe(products => {

      // debugger;
      console.log(products);
      this.products = products
      this.loading = false
    })
  }

}
