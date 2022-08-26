import {Component, Input, OnInit} from '@angular/core';
import {IntProduct} from "../../modules/products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product: IntProduct
  details = true

  constructor() { }

  ngOnInit(): void {
  }

}
