import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public charged: boolean = true;
  public products: Product[] | any;
  public productsFilter?: Product[];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  // Method on load the products list
  private loadProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-udemy-jhs-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp: any) => {
          // console.log(resp);
          this.products = resp;
          setTimeout(() => {
            this.charged = false;
          }, 2000);
          resolve;
        });
    })
  }

  // Method to get an specific object
  public getProduct(id: string) {
    return this.http.get(`https://angular-udemy-jhs-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  // Method to get an specific product search by the user
  public searchProduct(search: string) {
    if (this.products.length !== 0) {
      this.filterProducts(search);
    } else {
      // En este caso primero pide que se vuelvan a cargar datos y luego se hace el filtro
      this.loadProducts().then(() => {
        this.filterProducts(search);
      });
    }
  }

  // Method to filter the searched products
  private filterProducts(product: string) {
    this.productsFilter = [];
    this.productsFilter = this.products
      .filter((resp: Product) => resp.categoria.toLowerCase().indexOf(product.toLowerCase()) >= 0 || resp.titulo.toLowerCase().indexOf(product.toLowerCase()) >= 0);
  }

}
