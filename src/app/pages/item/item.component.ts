import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDescription } from 'src/app/interfaces/product-descrption.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.styl']
})
export class ItemComponent implements OnInit {

  public id: string = "";
  public product: ProductDescription | any;

  constructor(private router: ActivatedRoute, public _product: ProductsService) { }

  ngOnInit(): void {
    this.router.params
      .subscribe((parameters) => {
        this._product.getProduct(parameters['id'])
          .subscribe((resp: ProductDescription | any) => {
            this.id = parameters['id'];
            this.product = resp;
          });
      });
  }

}
