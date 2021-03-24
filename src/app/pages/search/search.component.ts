import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {

  constructor(private router: ActivatedRoute, public _productSearch: ProductsService) { }

  ngOnInit(): void {
    this.router.params
      .subscribe((params) => {
        this._productSearch.searchProduct(params['termino']);
      });
  }

}
