import { Pipe, PipeTransform } from '@angular/core';
import {IntProduct} from "../modules/products";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IntProduct[], search: string): IntProduct[] {
    return products.filter(p=>p.title.toLowerCase().includes(search.toLowerCase()));
  }

}
