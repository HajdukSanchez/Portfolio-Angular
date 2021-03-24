import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public charged: boolean = true;
  public products?: Product;

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://angular-udemy-jhs-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any) => {
        // console.log(resp);
        this.products = resp;
        setTimeout(() => {
          this.charged = false;
        }, 2000);
      });
  }

}
